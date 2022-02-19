import React from "react";
import "./SignUp.css";
import { Link } from 'react-router-dom';
import leftBg from "../../assets/images/3d-object.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";

const SignUp = () => {
  return (
    <div>
      <div className="sign-up">
        <div className="left-side">
          <h3>
            Sign Up, to use our product <br /> for your business
          </h3>
          <img src={leftBg} />
        </div>
        <div className="right-side">
          <h2>Sign Up</h2>
          <div className="boxes">
            <div className="box">
              <img src={google} />
              <p>Sign up with Google</p>
            </div>
            <div className="box">
              <img src={facebook} />
              <p>Sign up with Facebook</p>
            </div>
          </div>
          <h1>OR</h1>
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button className="btn-1">SIGN UP</button>
            <p>Already have an account? <span><Link to="/login"><a>Log In</a></Link></span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
