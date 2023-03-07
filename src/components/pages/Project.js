/* [ ] Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
[ ] Must utilize router props to properly render the right project based on user selection
[ ] Must render the following info:
[ ] Project title
[ ] Link to the deployed version
[ ] Link to the GitHub repository
[ ] GIF or screenshot of the deployed application
*/
import projects from './components/pages/projects.json'
/*
<h3>Title</h3>
<a href="https://github.com/LillyIlex"> Deployed</a>
<a href="https://github.com/LillyIlex"> Github Repo</a>
<img src="assets/" alt="Image of website"/> */


import React from "react";

function Project(props) {
    // props/this.
    return (
        <div>
             <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Deployed Site:</strong> {props.deployed}
          </li>
          <li>
            <strong>GitHub Repo:</strong> {props.github}
          </li>
        </ul>
        </div>
    )
}

export default Project;
  /*       {this.state.projects.map(projects => (
          <Project
                id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
            deployed={projects.deployed}
            github={projects.github}
            */