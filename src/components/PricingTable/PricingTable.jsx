import React from 'react';
import './PricingTable.css';

const PricingTable = ({ plan, price, profiles, posts, time }) => {
  return (
      <div className="pricing-table">
          <h3>{plan}</h3>
          <h1>{price}</h1>
          <h6 className="per">per user, per month</h6>
          <button className="btn">Start My 15-day Trial</button>
          <hr />
          <p>{profiles}</p>
          <p>{posts}</p>
          <p>400+ Templates</p>
          <p>Calendar View</p>
          <p>{time}</p>
      </div>
  )
};

export default PricingTable;