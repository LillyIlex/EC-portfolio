// Must be rendered across the entire site
// Must Contain a Navbar

import React from "react";
import CV from "../../assets/CV.pdf"

function About() {
    return (
        <div>
            <a href={CV}>View my CV</a>
        </div>
    )
}

export default About;