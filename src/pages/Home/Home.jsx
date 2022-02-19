import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import imageLeft from "../../assets/images/image-left.png";
import imageRight from "../../assets/images/image-right.png";
import HomeIcons from "../../components/HomeIcons/HomeIcons";
import HomeRight from "../../components/HomeRight/HomeRight";
import HomeLeft from "../../components/HomeLeft/HomeLeft";
import icon1 from "../../assets/images/icon-1.png";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import img1 from "../../assets/images/img-1.png";
import img2 from "../../assets/images/img-2.png";
import img3 from "../../assets/images/img-3.png";
import img4 from "../../assets/images/img-4.png";
import img5 from "../../assets/images/img-5.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="notes">
          <h1>
            Find the right partners to <br /> fuel your business growth
          </h1>
          <p>
            Join a vibrant community of MSPs to forge long-lasting relationships
            with partners <br /> that help you create excellent customer
            experiences
          </p>
          <button className="btn-2">Register today</button>
        </div>
        <div className="images">
          <img src={imageLeft} className="image-left" />
          <img src={imageRight} className="image-right" />
        </div>
      </div>
      <div className="home-icons">
        <h2>List. Sell. Grow</h2>
        <div className="icon-boxes">
          <HomeIcons
            icon={icon1}
            about="Be a part of the only All-In-One platform for IT services"
          />
          <HomeIcons
            icon={icon2}
            about="Come closer to finding your next customer"
          />
          <HomeIcons
            icon={icon3}
            about="Grow your business with a single click"
          />
        </div>
      </div>
      <div className="about-sections">
        <HomeRight
          heading="Your channel program on steroids"
          p="Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here."
          img={img1}
        />
        <br />
        <br />
        <HomeLeft
          heading="Become the vendor everyone wants to buy from"
          p="Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution."
          img={img2}
        />
        <br />
        <br />
        <HomeRight
          heading="It’s like having Your best Salesman."
          p="Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly."
          img={img3}
        />
        <br />
        <br />
        <HomeLeft
          heading="Track your channel performance"
          p="Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum."
          img={img4}
        />
        <br />
        <br />
        <HomeRight
          heading="Get The best version of Your sales playbook"
          p="Gather insights about top channel sellers and find out what pitch and collaterals ensure maximum profitability."
          img={img5}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
