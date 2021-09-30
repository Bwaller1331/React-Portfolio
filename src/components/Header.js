import React from "react";


function Header() {


    return (
    <header>
        <a className="nav-button" href="/">Home</a>
        <a className="nav-button" href="#projects">Projects</a>
        <a className="nav-button"  href="/resume">Resume</a>
        {/* <a className="nav-button" href="/about">About</a> */}
    </header>
    )
}
export default Header;