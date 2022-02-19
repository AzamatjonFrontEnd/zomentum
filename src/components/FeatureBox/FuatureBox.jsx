import React from "react";
import "./FuatureBox.css";

const FuatureBox = ({ images, infos }) => {
  return (
      <div className="feature-box">
          <img src={images} />
          <h3>{infos}</h3>
          <p>Aliquam sagittis ligula et sem lacinia, ut facilisis <br /> enim sollicitudin. Proin nisi est, convallis nec purus <br /> vitae, iaculis posuere sapien. Cum sociis natoque.</p>
      </div>
  )
};

export default FuatureBox;
