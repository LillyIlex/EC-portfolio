// Must be rendered across the entire site
// Must Contain a Navbar

import React from "react";
import { Link } from 'react-router-dom';


function About() {
    return (
        <div>
            <h4>
            <Link to="https://docs.google.com/document/d/1d0h7jrBdazqEBfEqAUEUxoe2BpWznDOn06Uv6PVJlTE/edit?usp=sharing">View my CV</Link> CV </h4>
        </div>
    )
}

export default About;