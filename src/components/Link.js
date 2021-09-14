import React from "react";


function personalLinks(props){

return (
    <a className="links" href={props.src} target="blank"><img src={props.logo} width="50" height="50" alt={props.name}></img></a>)
    
}
export default personalLinks;