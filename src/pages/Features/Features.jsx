import React from "react";
import "./Features.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FeatureBox from '../../components/FeatureBox/FuatureBox';
import feature1 from '../../assets/images/features-01.jpg';
import feature2 from '../../assets/images/features-02.jpg';
import feature3 from '../../assets/images/features-03.jpg';

const Features = () => {
  return (
    <div>
      <Navbar />
      <div className="features">
        <div className="about">
          <h1>Features & Overviews</h1>
          <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br /> lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
        </div>
        <div className="services">
          <FeatureBox images={feature1} infos="Outstanding Landing Pages" />
          <FeatureBox images={feature2} infos="Beautiful SVG Font Icons" />
          <FeatureBox images={feature3} infos="Build a Site In Few Minutes" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
