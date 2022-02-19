import React from "react";
import './MiniBox.css';

const MiniBox = ({ icon }) => {
  return (
    <div className="mini-box">
      <img src={icon} />
      <h2>Lorem, ipsum dolor.</h2>
      <p>
        Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. <br />{" "}
        Consequuntur ea, quis magnam <br /> deserunt.
      </p>
    </div>
  );
};

export default MiniBox;
