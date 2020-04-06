import React from "react";
import { Form, Button } from 'react-bootstrap';



export default function FormSettings(props) {

  return (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone elsess.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>


    <Row className="justify-content-md-center">
        <Button variant="contained" color="primary" onClick={props.call}>
          CALL
        </Button>

        <Button variant="contained" color="primary" onClick={props.text}>
          TEXT
        </Button>
    </Row>

  </Form>

  )
}

// export default FormSettings