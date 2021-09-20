import projects from "../projects";
import CreateList from "./ProjectList";
import skills from "../skills";
import SkillsList from "./SkillsList";
import education from "../education";
import EduList from "./Education";

function eduList(certs){
    <EduList
        name={certs.name}
        date={certs.date}
        course={certs.course}
        cert={certs.cert}
        certDate={certs.certDate}
    />
}

function projList(project){
    <CreateList
        name={project.name}
        description={project.description}
        deploy={project.deploy}
        tech={project.tech}
    />
}



function skillsList(skills){
    return ( 
    <SkillsList
         id={skills.id}
         technical={skills.technical}
         personal={skills.personal}
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
                        <h3 className="resume-projects-title">Projects</h3>
                        {projects.map(CreateList)}
                 </div>
                 <div className="resume-skills">
                        {skills.map(skillsList)}
                 </div>
                 <div className="education">
                     <h3 className="ed-title">Education</h3>
                     {education.map(EduList)}
                 </div>
         </div>
                    <div className="spacer"></div>
    </div>
    
    )
}

export default Resume;