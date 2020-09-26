import React from "react";
import "./style.css";
import organize from "../../images/organize.png";
import organizev1 from "../../images/organizev1.png";
import trailLocator from "../../images/trailLocator.png";
import workoutTracker from "../../images/workoutTracker.png";
import weatherDashboard from "../../images/weatherDashboard.png";
import firstPortfolio from "../../images/firstPortfolio.png";
function PortContent(props) {
  console.log(props);
  const projectPhotos = [
    {
      id: 1,
      name: "Organize",
      img: organize,
      github: "https://github.com/Ashaw916/Organize2.0",
      url: "https://organize-demo.herokuapp.com/",
    },
    {
      id: 2,
      name: "Organize v1",
      img: organizev1,
      github: "https://github.com/Ashaw916/Organize_old",
      url: "https://stmayfield-organize.herokuapp.com/",
    },
    {
      id: 3,
      name: "Trail Locator",
      img: trailLocator,
      github: "https://github.com/Ashaw916/trail-locator",
      url: "https://ashaw916.github.io/trail-locator/",
    },
    {
      id: 4,
      name: "Workout Tracker",
      img: workoutTracker,
      github: "https://github.com/Ashaw916/Workout-Tracker",
      url: "https://ashaw916-workout-tracker.herokuapp.com/",
    },
    {
      id: 5,
      name: "Weather Dashboard",
      img: weatherDashboard,
      github: "https://github.com/Ashaw916/weather_dashboard",
      url: "https://ashaw916.github.io/weather_dashboard/",
    },
    {
      id: 6,
      name: "First Portfolio",
      img: firstPortfolio,
      github: "https://github.com/Ashaw916/portfolio",
      url: "https://ashaw916.github.io/portfolio/",
    },
  ];
  return (
    <div className="row ">
      {projectPhotos.map((prjct) => (
        <div className="portCard">
          <h2>{prjct.name}</h2>
          <ul key={prjct.id}>
            <li></li>
            <li>
              <a href={prjct.github}>GitHub</a>
            </li>
            <li>
              <a href={prjct.url}>Deployed site</a>
            </li>
            <li>{prjct.lang}</li>
          </ul>
          <img
            className="projectImg"
            src={prjct.img}
            alt="screenshot of project"
            href={prjct.url}
          />
        </div>
      ))}
    </div>
  );
}

export default PortContent;
