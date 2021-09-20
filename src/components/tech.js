
function TechMap(props){

    return(
        <div className="tech-box">
            <ul className="tech-list" name="tech-list">
                <label  name="tech-list"><h5>Technologies Used : </h5></label>
                    {props.tech.map((tech) => (
                        <li className="tech-item">{tech}</li>
                    ))}
            </ul>
        </div>
    )
}

export default TechMap;