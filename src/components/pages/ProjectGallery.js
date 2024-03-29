//  Must render dynamically 6 instances of the Project component
// Be sure to store your project data in a JSON file and import it into your project

import React from "react"
import projectData from "../../data/projects.json"
import Project from "../../components/Project"


function ProjectGallery() {
  console.log(projectData)
  return (
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
 
    <h2> My Personal Projects</h2>
      {projectData.map(item => (
        <Project
        id={item.id}
        key={item.id}
        name={item.name}
        bio={item.bio}
        image={item.image}
        github= {item.github} 
        website={item.website}
        />))}

    </div>  )
}

export default ProjectGallery;