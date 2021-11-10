import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const vertical = "top";
const horizontal = "right";

const AddMark = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: 0,
    purpose: 0,
    phone: 0,
  });
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/patients/addPatient", formData)
      .then((res) => {
        console.log(res);
        handleClick();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Patient Added Successfully!
        </Alert>
      </Snackbar>
      <header className="header">
        <div className="logo-text">
          Marks Tracker
          <LibraryBooksIcon
            style={{ color: "white", transform: "translate(10px,5px)" }}
          />
        </div>
      </header>
      <div className="form_container">
        <Box component="form">
          <div className="input-box-container">
            <TextField
              name="name"
              className="input_box"
              onChange={onChange}
              required
              id="standard-basic"
              variant="standard"
              placeholder="Name..."
            />
          </div>
          <div>
            <TextField
              name="age"
              className="input_box"
              onChange={onChange}
              required
              variant="standard"
              id="outlined-required"
              placeholder="Age..."
            />
          </div>
          <div>
            <TextField
              name="gender"
              className="input_box"
              onChange={onChange}
              required
              variant="standard"
              id="outlined-required"
              placeholder="Gender...."
            />
          </div>
          <div>
            <TextField
              name="purpose"
              className="input_box"
              onChange={onChange}
              required
              variant="standard"
              id="outlined-required"
              placeholder="Purpose...."
            />
          </div>
          <div>
            <TextField
              name="phone"
              className="input_box"
              onChange={onChange}
              required
              variant="standard"
              id="outlined-required"
              placeholder="Mobile...."
            />
          </div>
          <button className="buttons" type="submit" onClick={onSubmit}>
            Submit
          </button>
        </Box>
      </div>
    </>
  );
};

export default AddMark;
