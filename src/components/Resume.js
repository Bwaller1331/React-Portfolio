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
                <div className="resume-nav">
                    <div className="docs-link">
                    <a className="google-docs"
                        href="https://docs.google.com/document/d/1BgCBGkW5pkhh5PKbJ53Kb6652d_dQT4Fr_tQ07o0ZSc/edit?usp=sharing"
                        target="blank">
                            <img src="https://icons-for-free.com/iconfiles/png/512/docs+document+file+google+suits+icon-1320183406448604527.png"
                                alt="Google Doc Resume Link" 
                                height="80" width="100"/>
                    </a>
                    <p className="doc-version">Google Documents Version</p>
                    </div>
                    <div className="pdf-link">
                    <a className="pdf-img"
                        href="../Brandon_Waller_Resume.pdf">
                            <img src="data:image/png;base64,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"
                                alt="PDF Link" 
                                height="70" width="70"/>
                    </a>
                    <p className="pdf-version">PDF Version</p>
                    </div>
                </div>
                <h1 className="head-name">Brandon Waller</h1>
                <h4 className="head-title">Junior Full-Stack Web Developer</h4>
            </div>
            <div className="car-obj">
                <h3 className="car-title">
                    Career Objective
                </h3>
                <p className="pro-desc">
                    Recent graduate from The Ohio State University's Full-Stack Web Development Bootcamp. 
                    Seeking an entry-level web-development job, where I can put my skills to use while learning from industry professionals.
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