/* [ ] Home:
This should be a welcome landing page that contains:
[ ] Your Name
[ ] A Headshot of you
[ ] Your brand statement
[ ] Some indication that this is your portfolio site
*/

import React from "react";
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import profilePic from "../../assets/images/profile-pic.png"
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div>

            <h1 className="text-3xl font-bold underline text-center"> Elizabeth Corris</h1>
            <h3 className="text-2xl font-bold text-red-500 underline"> Junior Web Dev</h3>

            <div className="fex justify-center w-4 h-7">
                <p className="mt-12 border-red-600 w-3 h-7"> I am a recent Front-End Web Development course graduate, and am excited about the opportunities a career in code will bring.

                    Here in my profile you will find projects I have created, and my CV. Reach out using the contact page.

                </p>
                <h6 class="bg-blue-700" >My skills include</h6>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>AJAX</li>
                    <li>Git/GitHub</li>

                </ul>
            </div>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Body>
                                <img style={{ width: '18rem' }} src={profilePic} alt="Lil Corris" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8}>
                        <Card>
                            <Card.Body >
                                <p className="mt-12 border-red-600"> I am a recent Front-End Web Development course graduate, and am excited about the opportunities a career in code will bring.

                                    Here in my profile you will find projects I have created, and my CV. Reach out using the contact page.

                                </p>
                                <h6 class="bg-blue-700" >My skills include</h6>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Node.js</li>
                                    <li>React</li>
                                    <li>jQuery</li>
                                    <li>AJAX</li>
                                    <li>Git/GitHub</li>

                                </ul>
                                <Button variant="outline-dark"> <Link to="/about">Read more</Link> </Button>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default Home;

/* function readMore() {
  alert('Make my');
}
 
<img onClick={readMore} /> 
*/