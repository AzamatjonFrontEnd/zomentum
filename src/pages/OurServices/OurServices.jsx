import React from "react";
import "./OurServices.css";
import Navbar from "../../components/Navbar/Navbar";
import MiniBox from "../../components/MiniBox/MiniBox";
import desktop from "../../assets/images/desktop.png";
import database from "../../assets/images/database.png";
import magic from "../../assets/images/magic.png";
import cloud from "../../assets/images/cloud.png";
import BigBox from "../../components/BigBox/BigBox";
import service1 from "../../assets/images/service-01.png";
import service2 from "../../assets/images/service-02.png";
import service3 from "../../assets/images/service-03.png";
import Footer from "../../components/Footer/Footer";

const OurServices = () => {
  return (
    <div>
      <Navbar />
      <div className="our-services">
        <div className="mini-services">
          <div className="mini-notes">
            <h1>
              Our Mini Services for <br /> your Study
            </h1>
          </div>
          <div className="mini-boxes">
            <MiniBox icon={desktop} />
            <MiniBox icon={database} />
            <MiniBox icon={magic} />
            <MiniBox icon={cloud} />
          </div>
        </div>
        <div className="big-services">
          <div className="big-notes">
            <h1>Our Services</h1>
            <p>
              Our Service unlimited solutions to all your business needs. in the
              installation package we prepare search engine optimization, social{" "}
              <br /> media support, we provide corporate identity and graphic
              design services.
            </p>
          </div>
          <div className="big-boxes">
            <BigBox bigImage={service1} bigHeading="Smart Watch Editions" />
            <BigBox bigImage={service2} bigHeading="Web UI Kit Design" />
            <BigBox bigImage={service3} bigHeading="Mobile Optimisation" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurServices;
