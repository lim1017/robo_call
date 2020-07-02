import React, { useState, createRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import FormSettings from "./components/FormSettings/FormSettings.jsx";

import Modalz from "./components/Modal/Modal.jsx";
import Modalz2 from "./components/Modal/Modal2.jsx";

require("dotenv").config();

const accountSid = process.env.REACT_APP_SID;
const authToken = process.env.REACT_APP_TOKEN;
var twilio = require("twilio");
const client = new twilio(accountSid, authToken);


function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const [modalShow2, setModalShow2] = React.useState(false);

  function toggleModel1() {
    setModalShow(!modalShow);
  }

  function toggleModel2() {
    setModalShow2(!modalShow);
  }

  const [phone, setPhone] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [img, setImg] = React.useState("");
  const [audio, setAudio] = React.useState("");

  function handleChangePhone(event) {
    setPhone(event.target.value);
  }

  const handleChangeMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleChangeImg = (event) => {
    setImg(event.target.value);
  };

  const handleChangeAudio = (event) => {
    setAudio(event.target.value);
    console.log(audio);
  };

  const makeText = () =>{
    text(phone, msg, img)
  }

  const makeCall = () =>{
    call(phone, msg, audio)
  }

  const clearFields=()=>{
    setPhone("")
    setMsg("")
    setImg("")
    setAudio("")
  }


function call(phone, msg, audio) {
  //cant sent spaces in https requests so replace spaces with +

  if (msg == ""){
    msg="Hello from a friend!"
  }

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
    .then((message) =>{
      console.log(message.sid)
      toggleModel1()
      clearFields()
    })
    .catch(err=>{
      console.log(err)
      alert("Error check phone number");

    })
}

function text(phone, msg, img) {

  if (img == ""){
    img = "https://dcist.com/wp-content/uploads/sites/3/2020/02/wilford_newsletter.jpg"
  }

  if (msg == ""){
    msg="Hello from a friend!"
  }

  client.messages
    .create({
      body: msg,
      mediaUrl: img,
      to: phone,
      from: '+12269185064'
    })
    .then((message) =>{
      console.log(message.sid)
      toggleModel2()
      clearFields()
    })
    .catch(err=>{
      console.log(err)
      alert("Error check phone number");

    })
}

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1 style={{marginBottom: "2em", marginTop:"1em"}}>ROBO CALL Prank Your Friends!!</h1>
      </Row>

      <Row className="justify-content-md-center">
        
        <Col md> 
        <img src="https://collectiondebtlawyer.com/wp-content/uploads/2015/08/Robot-calling.png" 
        alt="Girl in a jacket" width="100%" height="100%" /> 
        </Col>
        
        <Col ls="auto">
        <FormSettings
          call={call}
          text={text}
          toggleModel1={toggleModel1}
          toggleModel2={toggleModel2}
          handleChangePhone={handleChangePhone}
          handleChangeMsg={handleChangeMsg}
          handleChangeImg={handleChangeImg}
          handleChangeAudio={handleChangeAudio}
          makeText={makeText}
          makeCall={makeCall}
          audio={audio}
          phone={phone}
          msg={msg}
          img={img}
        />
        </Col>


        
        <Col md> 
        <img src="https://thumbs.dreamstime.com/b/d-robot-has-mobile-phone-render-holding-66568146.jpg" 
        alt="Girl in a jacket" width="100%" height="100%" /> 

        </Col>
      </Row>

      <Modalz
        show={modalShow}
        onHide={() => setModalShow(false)}
        audio={audio}
        phone={phone}
        img={img}
        msg={msg}
        call={call}
        toggleModel1={toggleModel1}
      />

      <Modalz2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        audio={audio}
        phone={phone}
        img={img}
        msg={msg}
        text={text}
        toggleModel2={toggleModel2}
      />
    </Container>
  );
}

export default App;
