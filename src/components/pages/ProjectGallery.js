//  Must render dynamically 6 instances of the Project component
// Be sure to store your project data in a JSON file and import it into your project

import React from "react"
import project from "../../data/projects.json"
import Project from "./Project"

function ProjectGallery(props) {
  
  return (
  //  {ths.state.props.map(project => (
      <Project
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          github= {project.githublink} 
          website={project.websitelink}
      />
  )};

export default ProjectGallery;