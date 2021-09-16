import react from "react";
function SkillsList(props){

    return(
        <div className="skills-box">
            <h3 className="skills-title">Skills</h3>
            <div className="skill-wrapper">
            <div className="tech-skills-box">
                <ul className="tech-skill-list" name="tech-skill-list">
                    <label for ="tech-skill-list"><h5>Technical : </h5></label>
                        {props.technical.map((techList) => (
                            <li className="tech-skill-item">{techList}</li>
                    ))} 
                </ul> 
            </div>
            <div className="pers-skills-box">
            <ul className="pers-list" name="pers-list">
                <label for ="pers-list"><h5>Personal : {props.id}</h5></label>
                {props.personal.map((pers) => (
                    <li className="pers-item">{pers}</li>
                ))}
            </ul>
            </div>
            </div>
        </div>
    )
}

export default SkillsList;