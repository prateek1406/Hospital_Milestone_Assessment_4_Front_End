import { ADD_PATIENT, GET_PATIENTS } from "../types";

const initialState = {
  patients: [],
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PATIENT:
      return state;

    case GET_PATIENTS:
      return {
        ...state,
        patients: action.payload,
      };
    default:
      return state;
  }
};

export default patientReducer;
