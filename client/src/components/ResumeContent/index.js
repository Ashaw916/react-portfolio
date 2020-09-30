import React from "react";
import "./style.css";

const experience = [
  {
    id: "1",
    name: "AuctionMethod",
    position: "Software Tester & Tech Support",
    start: "06/15/2020",
    end: "Present",
    skills: [
      "Help Desk",
      "Software Testing",
      "Project Management",
      "Operations",
      "Problem Solving",
    ],
  },
  {
    id: "2",
    name: "Nugget Market",
    position: "Meat Cutter",
    start: "03/20/2019",
    end: "06/15/2020",
    skills: [
      "Customer Service",
      "Time Management",
      "Attention to Detail",
      "Quality control",
      "Folowing Instructions",
    ],
  },
  {
    id: "3",
    name: "Monks Cellar",
    position: "Prep Cook",
    start: "05/13/2018",
    end: "03/20/2019",
    skills: [
      "Time Management",
      "Quality control",
      "Folowing Instructions",
      "Multitasking",
    ],
  },
  // {
  //   id: "4",
  //   name: "Pinelands Preservations",
  //   position: "Lead Data Processor",
  //   start: "05/13/2018",
  //   end: "03/20/2019",
  //   skills: ["Data Processing", "Atention to detail", ""],
  // },
];

function ResumeContent() {
  return (
    <div className="container" id="resume">
      <h1>My Experience</h1>
      <div className="row ">
        {experience.map((job) => (
          // <div className="resCard">
          <ul key={job.id}>
            <li>
              <h2>{job.name}</h2>
            </li>
            <li>
              <h3>{job.position}</h3>
            </li>
            <li>
              <h3>
                From {job.start} to {job.end}
              </h3>
            </li>
            {job.skills.map((skl, i) => (
              <ul key={(skl.id, i)}>
                <li>
                  <h4>{skl}</h4>
                </li>
              </ul>
            ))}
          </ul>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeContent;
