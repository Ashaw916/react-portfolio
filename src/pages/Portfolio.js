import React from "react";
import PortContent from "../components/PortContent";
import projects from "../projects/projects.json";
// import organize from "../images/organize.png";
// import organizev1 from "../images/organizev1.png";
// import trailLocator from "../images/trailLocator.png";
// import workoutTracker from "../images/workoutTracker.png";
// import weatherDashboard from "../images/weatherDashboard.png";
// import firstPortfolio from "../images/firstPortfolio.png";

// const projectPhotos = [
//   {
//     photo: { organize },
//   },
//   {
//     photo: { organizev1 },
//   },
//   {
//     photo: { trailLocator },
//   },
//   {
//     photo: { workoutTracker },
//   },
//   {
//     photo: { weatherDashboard },
//   },
//   {
//     photo: { firstPortfolio },
//   },
// ];

export default function Portfolio() {
  console.log(projects);

  return (
    <div className="row center-content" id="portfolio">
      <PortContent projects={projects} />
    </div>
  );
}
