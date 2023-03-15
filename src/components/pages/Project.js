/* [ ] Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
[ ] Must utilize router props to properly render the right project based on user selection
[ ] Must render the following info:
[ ] Project title
[ ] Link to the deployed version
[ ] Link to the GitHub repository
[ ] GIF or screenshot of the deployed application
*/
//import projects from '../../data/projects.json'
/*
<h3>Title</h3>
<a href="https://github.com/LillyIlex"> Deployed</a>
<a href="https://github.com/LillyIlex"> Github Repo</a>
<img src="assets/" alt="Image of website"/> */


import React from "react";
import Card from 'react-bootstrap/Card';

function Project() {
  // props/this.

  return (
    <div> 
      <h2> My Personal Projects</h2>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <Card.Text>
         {}
        </Card.Text>
       
       <Card.Link > Website Link</Card.Link>
        <Card.Link> GitHub Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Project;