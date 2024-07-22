import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export function About() {
  const WorkIcon = () => <></>;

  return (
    <div className="abouts">
      <div className="about_me">
        <h1 className="text-3xl font-bold mb-4 pt-10 text-black">About Me</h1>
        <p className="mb-6">
          Hello, I am a full-stack developer with a focus on building web
          applications. I am highly curious about the nature of tech, and a
          dilligent problem solver. Outside of coding, I love to hike the great
          outdoors, play some Cricket, and Volley Ball.
        </p>
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="July - 1997"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Birth</h3>
            <h4 className="vertical-timeline-element-subtitle">Namakkal</h4>
            <p>
              I was born on July 1997 in Mohanur. My journey started in this
              picturesque Erode
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2003 - 2012"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Schooling</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Komarappa Sengunthar Highier Secoundary School
            </h4>
            <p>
              I did my schooling in 1std to 10th std from KSHS School in
              Chennimalai. These years provide me with a foundational education
              that prepare me for more specialized and advanced studies in the
              later years of my education.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Diploma in Electronics and Communication Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sri RajivGandhi Polytechnic of College
            </h4>
            <p>
              it's located at Myladi in Chennimalai, Diploma in Electronics and
              Communication Engineering (DECE) program includes a range of
              subjects such as electronics, digital communication, analog
              communication, microprocessors, digital electronics, network
              theory, and more. Students learn about the design, analysis, and
              maintenance of electronic systems and communication equipment.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor's Degree
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              VidhyaMandhir Institute of Technology
            </h4>
            <p>
              it's located at Ingur in Perundurai. This undergraduate degree
              program that focuses on the principles and applications of
              electronics and communication technologies. This program typically
              spans three years and provides me with a comprehensive education
              in various aspects of electronics and communication engineering.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              System Service Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Maadhu Systems
            </h4>
            <p>
              professional responsible for the design, implementation,
              maintenance, and support of various systems, technologies, or
              services within an organization. The role typically involves
              working with a range of hardware, software, and network components
              to ensure that systems and services are running efficiently and
              effectively.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - Present"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              System Administrator & Billing Supervisor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              RK Steel Manufacturing Company Pvt Ltd
            </h4>
            <p>
              SysAdmin, is responsible for managing an organization's computer
              systems, servers, and network infrastructure. Their primary role
              is to ensure the smooth operation, security, and scalability of
              the IT environment.
            </p>
            <p>
              A Billing Manager, also known as an Accounts Receivable Manager or
              Billing Coordinator, is responsible for managing an organization's
              billing and invoicing processes. Their role focuses on financial
              aspects, ensuring that the company's revenue is properly tracked,
              billed, and collected.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<WorkIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
