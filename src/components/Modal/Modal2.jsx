import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { PayPalButton } from "react-paypal-button-v2";


export default function Modalz2(props) {

  const {audio, phone, img, msg, text ,toggleModel2, onHide} = props

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Robo Text 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Only $0.44</h4>
        <p>
        I Promise its not a scam, Paypal takes $0.30 THATS the scam.
        </p>

        <PayPalButton
        amount="0.44"
        
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {

          alert("Thank you for paying me. Press ok to complete the action " + details.payer.name.given_name);
          
          toggleModel2()

          text(phone, msg, img)
 
          
        }}
        options={{
          currency:"CAD",
          clientId: "AYSYFZqs42lQV42qC3oKEtHr3Y4PaVwBwGqfXfBGNH1KVkw4fMqdOBPLEZwGnfXCi9GYJvjuybaEaSbQ"
        }}

        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

