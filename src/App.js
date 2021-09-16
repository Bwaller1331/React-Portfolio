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
      <div className="spacer"></div>
      </Route>
      <Route exact path="/resume">
      
        <Resume />
       
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
