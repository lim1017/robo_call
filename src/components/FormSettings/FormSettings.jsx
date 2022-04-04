import React from "react";
import { Form, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import InputBase from "@material-ui/core/InputBase";
import { Typography } from "@material-ui/core";

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
  const [phone, setPhone] = React.useState("");
  const [msg, setMsg] = React.useState("Hello there!");
  const [img, setImg] = React.useState(
    "https://i.pinimg.com/564x/ac/df/3d/acdf3da0fdbb3cf56cffcda4c87d8292.jpg"
  );
  const classes = useStyles();
  const [audio, setAudio] = React.useState("Rick Roll");

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
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Phone # (Include country code CAN/US=1)</Form.Label>

        <Form.Control
          type="phone"
          placeholder="Enter Phone #"
          onChange={handleChangePhone}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="message"
          placeholder="Default: Hello there!"
          onChange={handleChangeMsg}
        />
      </Form.Group>

      <Row className="d-flex flex-column align-items-center mt-4 mb-4">
        <img
          src="https://freesvg.org/img/arrowdownred.png"
          width={150}
          height={150}
        />
        <Typography>Choose a path</Typography>
      </Row>

      <Row>
        <Form.Group
          controlId="formBasicPassword"
          className="d-flex flex-column"
        >
          <Form.Label>Audio Clip: Calls Only</Form.Label>

          <FormControl className={classes.formControl}>
            <Select
              style={{ height: 38 }}
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={audio}
              onChange={handleChangeAudio}
            >
              <MenuItem value="Rick Roll">Rick Roll</MenuItem>
              <MenuItem value="Barrel">Do a Barrel Roll</MenuItem>
              <MenuItem value="Just Do It">Just Do It</MenuItem>
            </Select>
          </FormControl>
        </Form.Group>

        <Form.Group style={{ marginLeft: "5em" }} controlId="formBasicPassword">
          <Form.Label style={{ marginBottom: "15px" }}>
            Image URL: Text only
          </Form.Label>
          <Form.Control
            type="url"
            placeholder="Default: Fat Cat"
            onChange={handleChangeImg}
          />
        </Form.Group>
      </Row>

      <Row className="justify-content-md-center">
        <Button
          style={{ marginRight: "3em" }}
          variant="contained"
          color="primary"
          onClick={() => props.call(phone, msg, audio)}
        >
          CALL
        </Button>

        <Button
          style={{ marginLeft: "3em" }}
          variant="contained"
          color="primary"
          onClick={() => props.text(phone, msg, img)}
        >
          PICTURE TEXT
        </Button>
      </Row>
    </Form>
  );
}

// export default FormSettings
