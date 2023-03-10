/* [ ] Home:
This should be a welcome landing page that contains:
[ ] Your Name
[ ] A Headshot of you
[ ] Your brand statement
[ ] Some indication that this is your portfolio site
*/

import React from "react";

const profilePic = "public\assets\images\Profile-pic.png" 

function Home() {
    return (
        <div>
            <h1> Elizabeth Corris</h1>
            <h3> Junior Web Dev</h3>
            <img src={profilePic} alt="Lil Corris" />
                <p> I am a recent Front-End Web Development course graduate, and am excited to continue my jounrey to a career in code.

                    Please enjoy my portfolio, and use the contact form for any questions you may have.
                </p>
        </div >
    )
}

export default Home;

/* function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}
 
<img onClick={myFunc} /> 
*/