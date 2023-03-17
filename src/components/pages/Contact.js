import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contact() {
  const [text, setText] = useState('')
  const submitForm = (e) => {
    e.preventDefault()
    setText('')
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  console.log(text);
  //onclick, preventdefault
  return (

    <div>
      Let's connect!
      <Button variant="outline-light" href="https://www.linkedin.com/in/lil-corris/">LinkedIn</Button>
      <Button variant="outline-light" href="https://github.com/LillyIlex">Github</Button>
Reach Out!
    <Form onSubmit={submitForm} style={{ width: '50rem' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={text} onChange={handleChange} />
        <Form.Text className="text-muted" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' value={text} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Your message</Form.Label>
        <Form.Control type="text" placeholder="Enter message" name='text' value={text} onChange={handleChange} />
      </Form.Group>

      <Button variant="outline-light" type="submit">
        Send
      </Button>
    </Form>
    </div>
  );
}

export default Contact;