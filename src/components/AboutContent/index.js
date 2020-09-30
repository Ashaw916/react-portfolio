import React from "react";
import "./style.css";
import boodtstrap from "../../images/bootstrap.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import jquery from "../../images/jquery.png";
import js from "../../images/js.png";
import mern from "../../images/mern.png";
import mongo from "../../images/mongo.png";
import sql from "../../images/sql.png";
import nodejs from "../../images/nodejs.png";
import profilePicture from "../../images/profile_picture.jpg";
import react from "../../images/react.png";
import restApi from "../../images/restApi.png";

function Content() {
  return (
    <div className="container ">
      <div className="about-cont">
        <div className="row ">
          <div>
            <h1 className="heading ">Aaron Young</h1>
            {/* </div> */}
            {/* </div> */}
            {/* <div className="row"> */}
            {/* <div classNAme="col-md-12"> */}
            <img
              className="profilePicture"
              src={profilePicture}
              alt="coding language logo"
            />

            <p className="para">
              I am a full stack web developer building my body of work and
              learning new technologies. I am a recent graduate of UC Davis
              Continuing and Professional Education. My aim as a developer is to
              build my experience and knowledge to further my career and secure
              a place for myself in the future of the industry while making a
              difference in the world.
            </p>
          </div>

          <div className="row">
            <div className="langCard">
              <img
                className="devLogosq"
                src={html}
                alt="coding language logo"
              />
              <img className="devLogosq" src={css} alt="coding language logo" />
              <img className="devLogosq" src={js} alt="coding language logo" />
              <img
                className="devLogo1"
                src={boodtstrap}
                alt="coding language logo"
              />
              <img
                className="devLogosq"
                src={jquery}
                alt="coding language logo"
              />
              <img
                className="devLogo"
                src={restApi}
                alt="coding language logo"
              />
              <img className="devLogo" src={sql} alt="coding language logo" />
              <img className="devLogo" src={mongo} alt="coding language logo" />
              <img
                className="devLogosq"
                src={react}
                alt="coding language logo"
              />
              <img
                className="devLogo1"
                src={nodejs}
                alt="coding language logo"
              />
              <img className="devLogo" src={mern} alt="coding language logo" />
              {/* <img className="devLogo" src={pwa} alt="coding language logo" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
