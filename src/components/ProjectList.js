import projects from "../projects";




function CreateList(props) {

    return ( 
    <div className="project-box">
    <div className="resume-project-box">
        
        <h3 className="proj-title">{props.name}</h3>
        <a className="proj-link" href={props.deploy} target="blank">{props.deploy}</a>
        <div className="proj-det-cont">
        <div className="tech-box">
            <ul className="tech-list" name="tech-list">
                <label  name="tech-list"><h5>Technologies Used : </h5></label>
                    {props.tech.map((techList) => (
                        <li className="tech-item">{techList}</li>
                    ))}
            </ul>
        </div>
        <div className="proj-desc-box">
        <p className="proj-desc-head">Description: </p>
        <p className="proj-desc">{props.description}</p>
        </div>
        </div>
    </div>
    </div>
    )
}

export default CreateList;

