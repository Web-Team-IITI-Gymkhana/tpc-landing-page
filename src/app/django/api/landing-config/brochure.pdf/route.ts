import { open } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-dynamic";

async function fetchBrochure(request: Request): Promise<Response | null> {
  const djangoUrl = process.env.LANDING_CONFIG_DJANGO_URL;
  if (!djangoUrl) return null;

  const timeout = new AbortController();
  const timer = setTimeout(() => timeout.abort(), 2000);
  try {
    const url = new URL("/django/api/landing-config/brochure.pdf", djangoUrl);
    const upstream = await fetch(url, {
      method: request.method,
      signal: AbortSignal.any([request.signal, timeout.signal]),
      cache: "no-store",
    });
    if (!upstream.ok) {
      await upstream.body?.cancel();
      return null;
    }

    const headers = new Headers();
    for (const name of ["content-type", "content-disposition", "cache-control", "x-content-type-options"]) {
      const value = upstream.headers.get(name);
      if (value) headers.set(name, value);
    }
    return new Response(upstream.body, { status: upstream.status, headers });
  } catch {
    return null;
  } finally {
    // The deadline covers response headers, leaving time to stream a large PDF.
    clearTimeout(timer);
  }
}

async function serveFallback(path: string, headOnly: boolean): Promise<Response | null> {
  let file;
  try {
    file = await open(path, "r");
    const info = await file.stat();
    if (!info.isFile()) {
      await file.close();
      return null;
    }
    const headers = {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="placement-brochure.pdf"',
      "Content-Length": String(info.size),
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    };
    if (headOnly) {
      await file.close();
      return new Response(null, { headers });
    }
    const stream = file.createReadStream();
    const chunks = stream[Symbol.asyncIterator]();
    const body = new ReadableStream<Uint8Array>({
      async pull(controller) {
        const { done, value } = await chunks.next();
        if (done) controller.close();
        else controller.enqueue(value);
      },
      cancel() {
        stream.destroy();
      },
    });
    return new Response(body, { headers });
  } catch {
    await file?.close();
    return null;
  }
}

async function forwardBrochure(request: Request): Promise<Response> {
  const primary = await fetchBrochure(request);
  if (primary) return primary;

  const headOnly = request.method === "HEAD";
  const publishedPath = process.env.LANDING_BROCHURE_FALLBACK_FILE;
  if (publishedPath) {
    const published = await serveFallback(publishedPath, headOnly);
    if (published) return published;
  }

  const bundledPath = join(process.cwd(), "assets", "placement-brochure.pdf");
  return (await serveFallback(bundledPath, headOnly)) ?? new Response(null, { status: 503 });
}

export { forwardBrochure as GET, forwardBrochure as HEAD };
