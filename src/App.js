import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import FormSettings from "./components/FormSettings/FormSettings.jsx";

require("dotenv").config();

const accountSid = process.env.REACT_APP_SID;
const authToken = process.env.REACT_APP_TOKEN;

console.log(authToken);

var twilio = require("twilio");
const client = new twilio(accountSid, authToken);

function call(phone, msg, audio) {
  if (!phone) {
    alert("please enter phone #");
  }

  //cant sent spaces in https requests so replace spaces with +
  const newMsg = msg.replace(/ /g, "+");

  let song = "";

  if (audio === "Rick Roll") {
    song = "http://demo.twilio.com/docs/classic.mp3";
  }

  if (audio === "Barrel") {
    song = "https://melon-zebra-7147.twil.io/assets/BARRELROLL.mp3";
  }

  if (audio === "Just Do It") {
    song = "https://melon-zebra-7147.twil.io/assets/DOIT.mp3";
  }

  client.calls
    .create({
      url: `https://handler.twilio.com/twiml/EH34f76e7cba60708c9daa84db1b77a062?MSG=${newMsg}&song=${song}`,
      to: phone,
      from: "+12269185064",
    })
    .then((call) => console.log(call.sid))
    .catch((err) => console.log(err));
}

function text(phone, msg, img) {
  if (!phone) {
    alert("please enter phone #");
  }

  client.messages
    .create({
      body: msg,
      mediaUrl: [img],
      to: phone,
      from: "+12269185064",
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err));
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
