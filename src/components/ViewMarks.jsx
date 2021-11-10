import React, { useEffect } from "react";
import { connect } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchPatients } from "./../redux";
import TableCells from "./TableCells";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const ViewMarks = (props) => {
  useEffect(() => {
    props.get();

    //eslint-disable-next-line
  }, []);
  console.log(props.patients);
  return (
    <>
      <header className="header">
        <div className="logo-text">
          Patient Tracker
          <LibraryBooksIcon
            style={{ color: "white", transform: "translate(10px,5px)" }}
          />
        </div>
      </header>
      <TableContainer component={Paper} style={{ padding: "20px 20px" }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Purpose</TableCell>
              <TableCell align="center">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.patients.patients.map((row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCells data={row} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    patients: state.patient,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get: () => dispatch(fetchPatients()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewMarks);
