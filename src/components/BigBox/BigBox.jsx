import React from "react";
import "./BigBox.css";

const BigBox = ({ bigImage, bigHeading }) => {
  return (
    <div className="big-box">
      <div className="big-image">
        <img src={bigImage} />
      </div>
      <div className="big-info">
        <h2>{bigHeading}</h2>
        <p>
          Aliquam sagittis ligula et sem lacinia, ut <br /> facilisis enim
          sollicitudin. Proin nisi est, <br /> convallis nec purus vitae,
          iaculis <br /> posuere sapien. Cum sociis natoque.
        </p>
      </div>
    </div>
  );
};

export default BigBox;
