
function EduList(props){
    return(
        <div className="edu-wrapper">
            <h4>{props.name}</h4>
            <p>{props.date}</p>
            <p className="course-details">{props.course}</p>
            <div className="cert-box">
            <h5>Certification: </h5>
            <p className="cert-details">{props.cert}</p>
            <p>{props.certDate}</p>   
            </div>         
        </div>
    )
}

export default EduList;