import React from "react";
import { Link } from "react-router-dom";
import "./HomeLeft.css";

const HomeLeft = ({ heading, p, img }) => {
  return (
    <div className="home-left">
      <div className="image">
        <img src={img} />
      </div>
      <div className="notes">
        <h3>{heading}</h3>
        <p>{p}</p>
        <Link to="/signup">
          <button className="btn">
            Sign Up Now <span>></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeLeft;
