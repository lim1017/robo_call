import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { PayPalButton } from "react-paypal-button-v2";


export default function Modalz(props) {

  const {audio, phone, img, msg, call ,toggleModel, onHide} = props

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Text or Call 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Only $0.10</h4>
        <p>
        I Promise its not a scam, it would cost more if it was.
        </p>

        <PayPalButton
        amount="0.10"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by Press ok to complete the action " + details.payer.name.given_name);
          
          toggleModel()

          call(phone, msg, audio)
 
          
        }}
      />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

