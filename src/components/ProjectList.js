
function CreateList(props) {

    return ( 
    <div className="project-box">
    <div className="resume-project-box">
        
        <h3 className="proj-title">{props.name}</h3>
        <p className="proj-desc">{props.desc}</p>
        <a className="proj-link" href={props.deploy}>{props.deploy}</a>
        <div className="tech-box">
            <ul className="tech-list" name="tech-list">
                <label  name="tech-list"><h5>Technologies Used : </h5></label>
                {props.tech.map((tech) => (
                    <li className="tech-item">{tech}</li>
                ))}
            </ul>
        </div>
    </div>
    </div>
    )
}

export default CreateList;