import type { LandingPageConfig } from "@/lib/landing-page-config";
import Image from "next/image";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

export default function Footer(props: LandingPageConfig["footer"]) {
  return (
    <div className="bg-[#031324] text-white flex justify-center mt-[calc(5rem+10px)]" id="footer">
      <div className="max-w-[1440px] w-full flex flex-col px-4 sm:px-6 lg:px-10 relative">
        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 pb-16 pt-8">
          {/* Quick Links */}
          <div className="text-sm">
            <div className="mb-4 text-sky-400 font-bold text-lg">Quick Links</div>
            <div className="flex flex-col gap-2">
              {props.quicklinks.map((val: any, index: any) => (
                <Link href={val.link} key={index} target="_blank">
                  {val.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="text-sm">
            <div className="mb-4 text-sky-400 font-bold text-lg">Social</div>
            <div className="flex gap-4">
              {props.stayconnected.map((val: any, index: any) => (
                <Link href={val.link} key={index} target="_blank">
                  {val.title === "linkedin" ? (
                    <LinkedInIcon className="hover:scale-110 text-2xl" />
                  ) : val.title === "twitter" ? (
                    <XIcon className="hover:scale-110 text-2xl" />
                  ) : null}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-sm">
            <div className="mb-4 text-sky-400 font-bold text-lg">Contact Info</div>
            <div className="flex items-start gap-3 mb-4">
              <CallIcon />
              <div>
                <div>Phone Number</div>
                <div className="opacity-60 break-words">{props.phone}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <PlaceIcon />
              <div className="opacity-60">
                {props.address.map((line, index) => <div key={index}>{line}</div>)}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <EmailIcon />
              <div>
                <div>Email</div>
                <div className="opacity-60 break-all">{props.email}</div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <iframe
              src={props.mapUrl}
              width="100%"
              height="260"
              loading="lazy"
              className="rounded-md w-full"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[0.7rem] text-right pr-4 pb-2">{props?.copyright}</div>
      </div>
    </div>
  );
}
