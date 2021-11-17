import React from "react";
import Header from "./components/Header.js"
import Project from "./components/Project";
import projects from "./projects";
import Link from "./components/Link"
import links from "./links";
import AboutMe from "./components/AboutMe";
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./utils/styles.css";
import ContactMe from "./components/ContactMe/index.js"
import PersonalInfo from "./components/PersonalInfo/index.js";

function ContactLink(link){
  return(
    <ContactMe 
    name={link.name}
    src={link.src}
    logo={link.logo}
    text={link.text}
    />
  )
}


function createProject(project){
  return (
  <Project 
  id={project.id}
  name={project.name}
  img={project.imgURL}
  desc={project.description}
  deploy={project.deploy}
  github={project.github}
  logo="https://cdn-icons-png.flaticon.com/512/270/270798.png"
  />
  )
}

function createLink(link){
  return (
  <Link 
    name={link.name}
    src={link.src}
    logo={link.logo}
    text={link.text}
  />
  )
}

var http = require("http");
setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
}, 300000); // every 5 minutes (300000)

function App() {

  return (
    <Router>
    <div className="App">
      <Header />
      <div className="projectBody">
        <Switch>
          <Route exact path="/">
        <AboutMe />
        <div id="projects" className="project-header">
          <h3 className="project-header-title">Projects</h3>
          <div className="project-box-view">
        {projects.map(createProject)}
        <div className="spacer"></div>
        </div>
        </div>
        </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
      <Route exact path="/about">
        <PersonalInfo />
        <div className="contact-link-card">
        {links.map(ContactLink)}
        </div>
        <div className="spacer"></div>
      </Route>
      </Switch>
      </div>
      
      <div className="footer">
      {links.map(createLink)}
      </div>
    </div>
    </Router>
  );
}

export default App;
