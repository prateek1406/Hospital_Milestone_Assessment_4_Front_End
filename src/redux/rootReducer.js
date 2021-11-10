import { combineReducers } from "redux";
import patientReducer from "./reducers/patientReducer";

const rootReducer = combineReducers({
  patient: patientReducer,
});

export default rootReducer;
