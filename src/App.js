import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";


// const API_KEY = process.env.REACT_APP_YAHOO_API_KEY;

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;







function App() {



  function call (){

var twilio = require('twilio');
 
    const client = new twilio(accountSid, authToken);

    
    
    console.log('calling')
    console.log(accountSid)
    console.log(authToken)
    
    
    client.calls
          .create({
             url: 'http://demo.twilio.com/docs/voice.xml',
             to: '+14164538894',
             from: '+13656571048'
           })
          .then(call => console.log(call.sid));
    
  }













  return (
    <Container >
      <Row className="justify-content-md-center">
       <h1>ROBO CALL SITE</h1>
      </Row>

      <Row className="justify-content-md-center">
        <Button variant="contained" color="primary" onClick={call}>
        CALL
        </Button>

        <Button variant="contained" color="primary" onClick={()=> console.log(process.env.TWILIO_AUTH_TOKEN)}>
        TEXT
        </Button>
      </Row>
    </Container>
  );
}

export default App;
