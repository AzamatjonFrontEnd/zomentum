import React from 'react';
import './HomeIcons.css';

const HomeIcons = ({ icon, about }) => {
  return (
      <div className="box">
          <div className="icon">
              <img src={icon} />
          </div>
          <div className="notes">
              <p>{about}</p>
          </div>
      </div>
  )
};

export default HomeIcons;