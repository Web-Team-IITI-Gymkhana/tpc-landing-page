import Image from "next/image";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
export default function Footer(props: any) {
  return (
    <>
      <div
        className=" bg-[#031324] mt-[calc(5rem + 10px)] text-white flex justify-center "
        id="footer"
      >
        <div className=" max-w-[1440px] w-full flex flex-col relative px-3 ">
          <div className=" flex flex-row justify-around pb-16 pt-5 flex-wrap gap-2 lg:gap-4 px-5">
            <div className=" flex max-[482px]:w-full max-[482px]:flex-row  flex-col gap-10   text-[0.9rem]  ">
              <div className=" min-w-max ">
                <div className=" mb-4 mt-5 text-sky-400 font-bold text-[1.2rem]">
                  Quick Links
                </div>
                <div className=" flex flex-col gap-1">
                  {props.quicklinks.map((val: any, index: any) => {
                    return (
                      <Link href={val.link} key={index} target="_blank">
                        <div className="" key={index}>
                          {val.title}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className=" min-w-max">
                <div className="  mb-4 mt-5 text-sky-400 font-bold text-[1.2rem]">
                  Social
                </div>
                <div className=" flex gap-3">
                  {props.stayconnected.map((val: any, index: any) => {
                    return (
                      <div key={index}>
                        <Link href={val.link} target="_blank">
                          {val.title == "linkedin" ? (
                            <LinkedInIcon className=" hover:scale-110 text-[1.7rem]" />
                          ) : val.title == "twitter" ? (
                            <XIcon className=" text-[1.5rem] hover:scale-110" />
                          ) : null}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="  max-[482px]:w-full text-[0.9rem]  ">
              <div className="  mb-2 mt-5 text-sky-400 font-bold text-[1.2rem]">
                Contact Info
              </div>
              <div className=" flex flex-row gap-3 ">
                <div>
                  <CallIcon />
                </div>
                <div className=" flex flex-col">
                  <span>{"Phone Number"}</span>
                  <span className=" text-white opacity-60">
                    {"0731-660333"}
                  </span>
                  <span>{"Extn."}</span>
                  <span className=" text-white opacity-60">{"3431"}</span>
                </div>
              </div>
              <div className=" flex flex-row gap-3">
                <div>
                  <PlaceIcon />
                </div>
                <div className=" flex flex-col">
                  <span>{"Location"}</span>
                  <span className=" text-white opacity-60">
                    {"Indian Institute of Technology Indore"}
                  </span>
                  <span className=" text-white opacity-60">
                    {"Khandwa Road,Simrol,Indore Pin-453552"}
                  </span>
                  <span className=" text-white opacity-60">
                    {"Madhya Pradesh-India"}
                  </span>
                </div>
              </div>

              <div className=" flex flex-row gap-3">
                <div>
                  <EmailIcon />
                </div>
                <div className=" flex flex-col">
                  <span>{"Email"}</span>
                  <span className=" text-white opacity-60">
                    {"placementofficer@iiti.ac.in"}
                  </span>
                </div>
              </div>
            </div>
            <div className=" mb-2 mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.330526493356!2d75.92317729999999!3d22.529287999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efb7df4ad60b%3A0xb51ea33269875e24!2sIIT%20Indore%20Simrol%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1717103018656!5m2!1sen!2sin"
                width="400"
                height="260"
                loading="lazy"
                className="xl:w-[30rem] 2xl:w-[35rem] lg:w-[25rem] w-[80vw] rounded-md"
              ></iframe>
            </div>
          </div>
          <div className=" absolute right-0 bottom-0 m-[1rem] text-[0.7rem]">
            {props.copyright}
          </div>
        </div>
      </div>
    </>
  );
}
