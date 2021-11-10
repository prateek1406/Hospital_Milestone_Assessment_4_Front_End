import axios from "axios";
import { ADD_PATIENT } from "./types";
import { GET_PATIENTS } from "./types";
export const PATIENT_ADD = (data) => {
  return {
    type: ADD_PATIENT,
    payload: data,
  };
};
export const FETCH_PATIENTS = (data) => {
  return {
    type: GET_PATIENTS,
    payload: data,
  };
};

export const fetchPatients = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/v1/patients/getPatients")
      .then((res) => {
        console.log(res.data.patients);
        dispatch(FETCH_PATIENTS(res.data.patients));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const addMark = ({ name, email, phone, type, designation, gender }) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/v1/contacts/addContact", {
        name: name,
        email: email,
        phone: phone,
        type: type,
        designation: designation,
        gender: gender,
      })
      .then((res) => {
        console.log(res.data);
        const data = res.data.data.contact;
        dispatch(PATIENT_ADD(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
