import projects from "../projects";
import CreateList from "./ProjectList";
import skills from "../skills";
import SkillsList from "./SkillsList";


  function TechList(project){
    return (
    <CreateList
    name={project.name}
    desc={project.description}
    deploy={project.deploy}
    technical={project.tech}
    
    />
    )
};


function SkillList(skill){
    return ( 
    <SkillsList
         id={skill.id}
         technical={skill.technical}
         personal={skill.personal}
            />
    )
};

function Resume() {

    return(
    <div className="resume">
        <div className="resume-container">
            <div className="head-info">
                <h2 className="head-name">Brandon Waller</h2>
                <h4 className="head-title">Junior Full-Stack Web Developer</h4>
            </div>
            <div className="car-obj">
                <h3 className="car-title">
                    Career Objective
                </h3>
                <p className="pro-desc">
                    Recent graduate from The Ohio State University's Full-Stack Web Development Bootcamp. 
                    Seeking an entry-level web-develpoment job, where I can put my skills to use while learning from industry professionals.
                </p>
            </div>
            <div className="resume-projects">
                        <h3>Projects</h3>
                        {projects.map(CreateList)}
                 </div>
                 <div className="resume-skills">
                        {skills.map(SkillsList)}
                 </div>
         </div>
                    <div className="spacer"></div>
    </div>
    
    )
}

export default Resume;