import React from "react";
import Header from "./components/Header.js"
import Project from "./components/Project";
import projects from "./projects";
import Link from "./components/Link"
import links from "./links";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./utils/styles.css";

function createProject(project){
  return (
  <Project 
  name={project.name}
  img={project.imgURL}
  desc={project.description}
  link={project.link}
  github={project.github}
  />
  )
}

function createLink(link){
  return (
  <Link 
    name={link.name}
    src={link.src}
    logo={link.logo}
  />
  )
}


function App() {

  return (
    <Router>
    <div className="App">
      <Header />
      <div className="projectBody">
        <Switch>
          <Route exact path="/">
        <AboutMe />
        </Route>
        <Route exact path="/projects">
      {projects.map(createProject)}
      </Route>
      <Route exact path="/resume">

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
