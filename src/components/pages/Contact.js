import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contact() {
    //onclick, preventdefault
            return (
              <Form style={{ width: '50rem' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
          
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Your message</Form.Label>
                  <Form.Control type="text" placeholder="Enter message" />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            );
          }
          
export default Contact;