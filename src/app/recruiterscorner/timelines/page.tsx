import { Timeline } from "@/components/ui/timeline";

export default function Timelines() {
  return (
    <>
      <div className="min-h-screen ">
        <Timeline
          data={[
            {
              title: "Company Invitations",
              content:
                "The Training & Placement Cell (TPC), IIT Indore sends invitations to companies along with relevant information and Job Announcement Form (JAF). The recruiters also can send an email expressing their interest to participate in the campus recruitment program of IIT Indore on placementofficer@iiti.ac.in / apo@iiti.ac.in.",
            },
            {
              title: "Job Announcement Form Submission",
              content:
                "Companies interested in recruiting can fill the JAF for each profile they wish to hire for.",
            },
            {
              title: "Company Registration",
              content:
                "Once the filled JAF with all required details is received, companies are considered to be registered and will be contacted for further processes.",
            },
            {
              title: "Pre-placement Talks",
              content:
                "Companies interested in conducting a pre-placement talk can send a request along with the preferred date(s).",
            },
            {
              title: "Job Announcements to Students",
              content:
                "The Job Announcement Form of the company will be made available online to all the eligible students. Interested students may apply online to each of the job roles offered by the company within a specified period.",
            },
            {
              title: "Student Shortlisting",
              content:
                "The company can shortlist the students based on their shortlisting criteria like CV screening/assessment/GD.",
            },
            {
              title: "Campus Interview Scheduling",
              content:
                "Further, the TPC office allots the dates for campus interviews considering factors like student preference, job profile, compensation, association with the institution, etc.",
            },
            {
              title: "Final Selection List Submission",
              content:
                "The company is required to submit the list of selected and waitlisted (if any) candidates to the TPC office on the same day itself.",
            },
          ]}
        />
      </div>
    </>
  );
}
