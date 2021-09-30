

function ContactMe(props){
    return(
        <div className="contact-page">
           <div className="contact-card">
                <div>
                    <img src={props.logo} width="50" height="50" alt={props.name}></img>
                    <a href={props.src}><h3>{props.text}</h3></a>
                </div>
            </div>
            <div contact form>

            </div>
        </div>
    )
}

export default ContactMe;