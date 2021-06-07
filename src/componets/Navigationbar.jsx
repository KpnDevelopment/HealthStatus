import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../images/brandlogo.png";

function Navigationbar() {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand href="#home" style={{ color: "white", fontWeight: 800 }}>
          <img
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="logo"
            style={{ background: "#212529" }}
          />
          Health Monitor
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
