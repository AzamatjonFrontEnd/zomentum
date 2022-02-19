import React from "react";
import "./Pricing.css";
import Navbar from "../../components/Navbar/Navbar";
import check from "../../assets/images/check.png";
import Footer from "../../components/Footer/Footer";
import PricingTable from "../../components/PricingTable/PricingTable";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="pricing">
        <div className="pricing-header">
          <h1>
            Manage All Your Social Media <br /> Profiles From One Place.
          </h1>
          <div className="checks">
            <p>
              {" "}
              <img src={check} /> Free 15-day trial
            </p>
            <p>
              {" "}
              <img src={check} /> Unlimited Team Members
            </p>
            <p>
              {" "}
              <img src={check} /> Cancel Anytime
            </p>
          </div>
        </div>

        <div className="pricing-tables">
          <PricingTable plan="Startup" price="$14" profiles="5 Social Profiles" posts="5 Scheduled Posts Per Profile" time="24/7 Support" />
          <PricingTable plan="Business" price="$29" profiles="10 Social Profiles" posts="25 Scheduled Posts Per Profile" time="24/7 VIP Support" />
          <PricingTable plan="Agnecy" price="$139" profiles="100 Social Profiles" posts="140 Scheduled Posts Per Profile" time="24/7 VIP Support" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
