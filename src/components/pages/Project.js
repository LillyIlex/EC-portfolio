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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project() {
  // props/this.
  //const image = require(`../../../public/assets/images/${props.image}`);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
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