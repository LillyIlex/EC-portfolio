import React from "react";
import { SocialIcon } from 'react-social-icons';
import '../../index.css'
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import EmailIcon from "@material-ui/icons/Email";


function Footer() {
    return (
        <div className="footerDiv">
            <hr></hr>
        <h5 className="footer"> Connect with me </h5>
        <a><SocialIcon url="https://www.linkedin.com/in/lil-corris/" /></a>
        <a><SocialIcon url="https://github.com/LillyIlex" /></a>
        <p> &copy; Elizabeth Corris  2023</p>
        </div>
    )
}

export default Footer;