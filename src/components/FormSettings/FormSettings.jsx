import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import "./FormSettings.css";


const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      // marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FormSettings(props) {
  const classes = useStyles();

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone # (Include country code CAN/US=1)</Form.Label>

          <Form.Control
            type="phonw"
            placeholder="Enter Phone #"
            value={props.phone}
            onChange={props.handleChangePhone}
          />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="message"
            placeholder="Default: Hello, from a friend"
            value={props.msg}
            onChange={props.handleChangeMsg}
          />
        </Form.Group>

        <Row className="imgAudio">
          <FormControl className={classes.formControl}>
            {/* <InputLabel id="demo-customized-select-label">
              Audio: Call Only
            </InputLabel> */}
            <Form.Label>Audio Clip</Form.Label>

            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={props.audio}
              onChange={props.handleChangeAudio}
              defaultValue="Rick Roll"
              input={<BootstrapInput />}

            >
              <MenuItem value="Rick Roll">Rick Roll</MenuItem>
              <MenuItem value="Barrel">Do a Barrel Roll</MenuItem>
              <MenuItem value="Just Do It">Just Do It</MenuItem>
            </Select>

  
          </FormControl>

          <Form.Group
            style={{ marginLeft: "3em" }}
            controlId="formBasicPassword"
          >
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Default: Random Cat Img"
              onChange={props.handleChangeImg}
              value={props.img}
            />
          </Form.Group>
        </Row>

        <Row className="justify-content-md-center">
          <Button
            style={{ marginRight: "3em" }}
            variant="contained"
            color="primary"
            onClick={() => props.makeCall()}
          >
            CALL
          </Button>

          <Button
            style={{ marginLeft: "3em" }}
            variant="contained"
            color="primary"
            onClick={() => props.makeText()}
          >
            PICTURE MESSAGE
          </Button>
        </Row>
      </Form>
    </>
  );
}

// export default FormSettings

//props.call(phone, msg, audio)
// onClick={()=>props.text(phone, msg, img)}
