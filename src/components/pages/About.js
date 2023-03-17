// Must be rendered across the entire site
// Must Contain a Navbar

import React from "react";
//CV  <Link href="https://docs.google.com/document/d/1d0h7jrBdazqEBfEqAUEUxoe2BpWznDOn06Uv6PVJlTE/edit?usp=sharing">

//google drive url to PDF

function About() {
    return (
        <div>
            <a href={CV}>View my CV</a>
        </div>
    )
}

export default About;