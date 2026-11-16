import "server-only";

import { unstable_cache, unstable_noStore } from "next/cache";
import { cache } from "react";
import snapshot from "./landing-page-config.snapshot.json";

export type LandingPageConfig = typeof snapshot;

const optionalFields: Record<string, Record<string, string>> = {
  "navbar.buttons[]": { link: "", modalbutton: "" },
  "navbar.buttons[].drop[]": { target: "" },
  "faculty.faculties[]": { phone: "", office: "" },
  "staff.Info[].social": { linkedin: "", twitter: "", facebook: "", instagram: "" },
  "developers[]": { website: "" },
};

function matchesSnapshot(value: unknown, example: unknown, path = ""): boolean {
  if (Array.isArray(example)) {
    return Array.isArray(value) && value.every((item) =>
      example.some((sample) => matchesSnapshot(item, sample, `${path}[]`)),
    );
  }
  if (example && typeof example === "object") {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return false;
    }
    const fields = example as Record<string, unknown>;
    const data = value as Record<string, unknown>;
    const optional = optionalFields[path] ?? {};
    return Object.keys(fields).every((key) => Object.hasOwn(data, key) || Object.hasOwn(optional, key)) &&
      Object.entries(data).every(([key, item]) => {
        const childPath = path ? `${path}.${key}` : key;
        if (Object.hasOwn(fields, key)) return matchesSnapshot(item, fields[key], childPath);
        return Object.hasOwn(optional, key) && matchesSnapshot(item, optional[key], childPath);
      });
  }
  return typeof value === typeof example;
}

const fetchConfig = unstable_cache(
  async (baseUrl: string): Promise<LandingPageConfig> => {
    const response = await fetch(new URL("/django/api/landing-config/", baseUrl), {
      cache: "no-store",
      signal: AbortSignal.timeout(2000),
    });
    if (!response.ok) {
      throw new Error(`Landing page config returned HTTP ${response.status}`);
    }

    const content = await response.json();
    if (!matchesSnapshot(content, snapshot)) {
      throw new Error("Landing page config has an invalid structure");
    }
    return content;
  },
  ["landing-page-config-v1"],
  { revalidate: 300 },
);

export const getLandingPageConfig = cache(async (): Promise<LandingPageConfig> => {
  // Render at request time so a cold-cache fallback never becomes a cached page.
  unstable_noStore();
  const baseUrl = process.env.LANDING_CONFIG_DJANGO_URL;
  if (!baseUrl) {
    return snapshot;
  }

  try {
    return await fetchConfig(baseUrl);
  } catch (error) {
    // Keep the fallback outside the Data Cache so the next request can retry.
    console.warn("Using the bundled landing page config snapshot", error);
    return snapshot;
  }
});
