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

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
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
    margin: theme.spacing(1),
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

          <Form.Text className="text-muted">enter phone</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="message"
            placeholder="Hello, from a friend"
            value={props.msg}
            onChange={props.handleChangeMsg}
          />
        </Form.Group>

        <Row>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Audio: Call Only
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.audio}
              onChange={props.handleChangeAudio}
              defaultValue="Rick Roll"
            >
              <MenuItem value="Rick Roll">Rick Roll</MenuItem>
              <MenuItem value="Barrel">Do a Barrel Roll</MenuItem>
              <MenuItem value="Just Do It">Just Do It</MenuItem>
            </Select>

            {/* <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
        
        <NativeSelect
          id="demo-customized-select-native"
          value={audio}
          onChange={handleChangeAudio}
          input={<  BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Rick Roll</option>
          <option value={20}>Do A Barrel Roll</option>
          <option value={30}>Just Do It!</option>
        </NativeSelect> */}
          </FormControl>

          <Form.Group
            style={{ marginLeft: "3em" }}
            controlId="formBasicPassword"
          >
            <Form.Label>Image URL (Copy image address)</Form.Label>
            <Form.Control
              type="url"
              placeholder="Default = Random Fat Cat Image"
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
