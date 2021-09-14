import React from "react";


function Project(props){
    return(
        <div className="card project-card" style={{ backgroundImage: `url(${props.img})`}}>

        <div className="overlay">       
            <div className="Top">
                <h2 className="name"  >{props.name}</h2>
            </div>
            <div className="bottom">
                <p className="project-desc">{props.desc}</p>
            </div>
            <div className="links">
                <a className="deploy-link" href={props.link} target="blank" >Check it out</a>
                <a className="github-link" href={props.github} target="blank">More Information</a>
            </div>
        </div>
        
    </div>
)}

export default Project;