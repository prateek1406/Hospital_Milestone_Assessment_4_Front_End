import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import { Link } from "react-router-dom";

const Home = () => {
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
      <div className="logo_container">
        <div style={{ textAlign: "center" }}>
          {" "}
          <img
            src="logo.png"
            alt="logo"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "45px",
            }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="buttons">
            <Link className="navlink" to="/add">
              Add Patient
            </Link>
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="buttons">
            <Link className="navlink" to="/view">
              View Pateints
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
