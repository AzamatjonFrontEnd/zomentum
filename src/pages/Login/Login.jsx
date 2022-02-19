import React from "react";
import "./Login.css";
import { Link } from 'react-router-dom';
import leftBg from "../../assets/images/3d-object-2.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";

const LogIn = () => {
  return (
    <div>
      <div className="sign-up">
        <div className="left-side">
          <h3>
            Login, to use our product <br /> for your business
          </h3>
          <img src={leftBg} />
        </div>
        <div className="right-side">
          <h2>Login</h2>
          <div className="boxes">
            <div className="box">
              <img src={google} />
              <p>Continue with Google</p>
            </div>
            <div className="box">
              <img src={facebook} />
              <p>Continue with Facebook</p>
            </div>
          </div>
          <h1>OR</h1>
          <form>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button className="btn-1">LOG IN</button>
            <p>Already have'nt an account? <span><Link to="/signup"><a>Sign Up</a></Link></span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
