/* 
[ ] Must utilize router props to properly render the right project based on user selection
*/

import React from "react";
import Card from 'react-bootstrap/Card';

function Project(props) {
  // props/this.

  return (
 

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.bio}
          </Card.Text>

          <Card.Link href={props.website}> Website Link</Card.Link>
          <Card.Link href={props.github}> GitHub Link</Card.Link>
        </Card.Body>
      </Card>
   
  );

}

export default Project;