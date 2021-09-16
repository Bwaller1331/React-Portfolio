
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
            <div className="pro-links">
                <a className="deploy-link" href={props.deploy} target="blank" >Check it out</a>
                <a className="github-link" href={props.github} target="blank"><img src={props.logo} alt="github" target="blank" width="60" height="60"/></a>
            </div>
        </div>
        
    </div>
)}

export default Project;