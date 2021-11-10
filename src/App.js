import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddPatient from "./components/AddPatient";
import store from "./redux/Store";
import ViewMarks from "./components/ViewMarks";
function App() {
  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <AddPatient />
          </Route>
          <Route exact path="/view">
            <ViewMarks />
          </Route>
        </Switch>
      </Provider>
    </>
  );
}

export default App;
