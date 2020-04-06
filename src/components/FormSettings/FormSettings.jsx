import React, { useState } from "react";
import { Form, Row } from 'react-bootstrap';
import Button from "@material-ui/core/Button";




export default function FormSettings(props) {


  const [phone, setPhone] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [img, setImg] = React.useState("");


function handleChangePhone(event){
  setPhone(event.target.value);
}

const handleChangeMsg = event => {
  setMsg(event.target.value);
};

const handleChangeImg = event =>{
  setImg(event.target.value);
}



  return (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Phone #</Form.Label>
      
      <Form.Control type="phonw" placeholder="Enter Phone #" onChange={handleChangePhone}
      />

      <Form.Text className="text-muted">
        enter phone
      </Form.Text>
    </Form.Group>


    <Form.Group controlId="formBasicPassword">
      <Form.Label>Message</Form.Label>
      <Form.Control type="message" placeholder="Message"
      onChange={handleChangeMsg}
      />
    </Form.Group>
    


    <Form.Group controlId="formBasicPassword">
      <Form.Label>Img for Text only</Form.Label>
      <Form.Control type="url" placeholder="Img Url"
      onChange={handleChangeImg}
      />
    </Form.Group>
    

    <Row className="justify-content-md-center">
        <Button style={{marginRight:'1em'}} variant="contained" color="primary" onClick={()=>props.call(phone, msg)}>
          CALL
        </Button>

        <Button style={{marginLeft:'1em'}} variant="contained" color="primary" onClick={()=>props.text(phone, msg, img)}>
          PICTURE TEXT
        </Button>
    </Row>

  </Form>

  )
}

// export default FormSettings