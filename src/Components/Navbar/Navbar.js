import React from "react";
import "./Navbar.css";

const Nav = () => {
    return (
        <div className="navApp">
            <nav className="navbar">
                <div className="col-md-1"></div>
                <div className="col-md-4">
<h1>Donna Nguyen</h1>
                </div>
<br></br>
                <div className="col-md-3">
                <center><a href="#About">About Me</a> | <a href="#Port">Portfolio</a> | 
                 <a href="#Contact"> Contact</a></center>
                </div>
                <div className="col-md-1"></div>
            </nav>
        </div>
    )
}
export default Nav