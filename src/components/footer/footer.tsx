import Image from "next/image";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

export default function Footer(props: any) {
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
                <div className="opacity-60 break-words">0731-660 (Extn. 3572)</div>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <PlaceIcon />
              <div className="opacity-60">
                <div>Indian Institute of Technology Indore</div>
                <div>Khandwa Road, Simrol, Indore Pin-453552</div>
                <div>Madhya Pradesh - India</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <EmailIcon />
              <div>
                <div>Email</div>
                <div className="opacity-60 break-all">placementofficer@iiti.ac.in</div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.330526493356!2d75.92317729999999!3d22.529287999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efb7df4ad60b%3A0xb51ea33269875e24!2sIIT%20Indore%20Simrol%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1717103018656!5m2!1sen!2sin"
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
