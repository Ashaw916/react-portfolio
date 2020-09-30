import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import "./App.css";
// import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import projects from "./projects/projects.json";
// import ResumePdf from "./Resume.pdf";
// const proj = projects;
function App(props) {
  // console.log("1", proj);
  // useEffect(() => {
  //   // const projects = projects;
  //   console.log("2", proj);
  // });

  return (
    <>
      <Nav />
      <Wrapper>
        {/* <Landing /> */}
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
