import React from "react";
import { Link } from "react-router-dom";
import "./HomeRight.css";

const HomeRight = ({ heading, p, img }) => {
  return (
    <div className="home-right">
      <div className="notes">
        <h3>{heading}</h3>
        <p>{p}</p>
        <Link to="/signup">
          <button className="btn">
            Sign Up Now <span>></span>
          </button>
        </Link>
      </div>
      <div className="image">
        <img src={img} />
      </div>
    </div>
  );
};

export default HomeRight;
