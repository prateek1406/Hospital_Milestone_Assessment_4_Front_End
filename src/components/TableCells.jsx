import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import CreateIcon from "@mui/icons-material/Create";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TableCells = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: "",
    purpose: "",
    phone: "",
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
      .patch(
        `http://localhost:8000/api/v1/patients/updatePatient/${_id}`,
        formData
      )
      .then((res) => {
        console.log(res);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setFormData({
      name: name,
      age: age,
      gender: gender,
      purpose: purpose,
      phone: phone,
    });
    //eslint-disable-next-line
  }, []);
  const { _id, name, age, gender, purpose, phone } = props.data;
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="form_container">
            <Box component="form">
              <div className="input-box-container">
                <TextField
                  value={formData.name}
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
                  name="roll_no"
                  value={formData.age}
                  className="input_box"
                  onChange={onChange}
                  required
                  variant="standard"
                  id="outlined-required"
                  placeholder="Roll No...."
                />
              </div>
              <div>
                <TextField
                  name="physics"
                  className="input_box"
                  value={formData.gender}
                  onChange={onChange}
                  required
                  variant="standard"
                  id="outlined-required"
                  placeholder="Physics...."
                />
              </div>
              <div>
                <TextField
                  value={formData.purpose}
                  name="chemistry"
                  className="input_box"
                  onChange={onChange}
                  required
                  variant="standard"
                  id="outlined-required"
                  placeholder="Chemistry...."
                />
              </div>
              <div>
                <TextField
                  value={formData.phone}
                  name="maths"
                  className="input_box"
                  onChange={onChange}
                  required
                  variant="standard"
                  id="outlined-required"
                  placeholder="Maths...."
                />
              </div>
              <button className="buttons" type="submit" onClick={onSubmit}>
                Submit
              </button>
            </Box>
          </div>
        </Box>
      </Modal>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="center">{age}</TableCell>
      <TableCell align="center">{gender}</TableCell>
      <TableCell align="center">{purpose}</TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="center">
        <CreateIcon onClick={handleOpen} />
      </TableCell>
    </>
  );
};

TableCells.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
  purpose: PropTypes.string,
  phone: PropTypes.string,
  _id: PropTypes.string,
};

export default TableCells;
