import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import login from "../../assets/images/login.png";
import signup from "../../assets/images/signup.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <Link to="/features" style={{ textDecoration: "none" }}>
            <li>
              <a>Features</a>
            </li>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <li>
              <a>Services</a>
            </li>
          </Link>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <li>
              <a>Pricing</a>
            </li>
          </Link>
          <Link to="/company" style={{ textDecoration: "none" }}>
            <li>
              <a>Company</a>
            </li>
          </Link>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <li>
              <a>Blog</a>
            </li>
          </Link>
          <li>
            <a className="btn-1">Get a demo</a>
          </li>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <a className="login">
                <img src={login} />
                Login
              </a>
            </li>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <li>
              <a className="signin">
                <img src={signup} />
                SignUp
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
