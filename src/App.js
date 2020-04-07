import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import FormSettings from "./components/FormSettings/FormSettings.jsx";


require("dotenv").config();

const accountSid = process.env.REACT_APP_SID;
const authToken = process.env.REACT_APP_TOKEN;
var twilio = require("twilio");
const client = new twilio(accountSid, authToken);


function call(phone, msg, audio) {

  console.log(audio)
  let song=''

  if (audio ==="Rick Roll"){
    song='http://demo.twilio.com/docs/classic.mp3'
  }

  if (audio ==="Barrel"){
    song='https://melon-zebra-7147.twil.io/assets/BARRELROLL.mp3'
  }

  if (audio ==="Just Do It"){
    song='https://melon-zebra-7147.twil.io/assets/DOIT.mp3'
  }

  console.log(song)

  client.calls
    .create({
      url:
        `https://handler.twilio.com/twiml/EH34f76e7cba60708c9daa84db1b77a062?MSG=${msg}&song=${song}`,
      to: phone,
      from: "+13656571048",
    })
    .then((call) => console.log(call.sid));
}

function text(phone, msg, img) {


  client.messages
    .create({
      body: msg,
      mediaUrl: [img],
      to: phone,
      from: "+13656571048",
    })
    .then((message) => console.log(message.sid));
}

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1>ROBO CALL SITE!!</h1>
      </Row>

    <Row className="justify-content-md-center">
      <FormSettings call={call} text={text} />
    </Row>

    
    </Container>
  );
}

export default App;
