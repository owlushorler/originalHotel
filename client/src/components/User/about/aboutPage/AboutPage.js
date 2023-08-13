import React from "react";
import "../aboutPage/About.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import FontAwesomeIcon from "font-awesome"
import staff from "../../../imagesfolder/selection_9658493.png";
import care from "../../../imagesfolder/care_1429505.png";
import phone from "../../../imagesfolder/bx-phone-incoming.svg";

import Conference from "../../../imagesfolder/8115105.png";
import hours from "../../../imagesfolder/7877898.png";
import family from "../../../imagesfolder/5625449.png";
import wifi from "../../../imagesfolder/bx-wifi-2.svg";

// import { Carousel } from 'react-responsive-carousel';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './Carousel.css'

const AboutSection = () => {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg, sm">
          <div className="container">
            <h2>About </h2>
          </div>
        </nav>

        <div className="card_up">
          <img className="card_up" src={hours} alt="Your staff Alt Text" />
        </div>

        <div className="card">
          <div className="card2"/>
          <div className="card3"/>
        </div>

        <div className="side">
          <h5> Welcome to our H-Control</h5>
          <h4> H-Control Has Been Present For Over Two Decade</h4>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus ipsum nec arcu maximus, eu tempus mauris facilisis. Proin
            eget urna ac felis luctus feugiat in in est.
          </p>

          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus ipsum nec arcu maximus, eu tempus mauris facilisis. Proin
            eget urna ac felis luctus feugiat in in est.
          </p>

          <div className="client">
            <div className="bed">
              <img className="images" src={<wifi/>} alt="Your bed Alt Text" />
              <p className="we">200+</p>
              <p className="w">Available Rooms</p>
            </div>

            <div className="staff">
              <img className="images" src={staff} alt="Your staff Alt Text" />
              <p className="we">400+</p>
              <p className="w">Staff Members</p>
            </div>

            <div className="care">
              <img className="images" src={care} alt="Your care Alt Text" />
              <p className="we">240k+</p>
              <p className="w">Served Clients</p>
            </div>
          </div>
          <div className="base">
            <button className="word"> Book Now</button>
            <img className="phone" src={phone} alt="Your care Alt Text" />
            <h5> Call Us On 094389369445</h5>
          </div>
        </div>

        <div className="containers">
          <div className="base2">
            <h5> H-Control Your Excellent </h5>
            <h5> choice for Vacation</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus ipsum nec arcu maximus, eu tempus mauris facilisis. Proin
              eget urna ac felis luctus feugiat in in est.
            </p>
          </div>
          <div className="four_cards">
            <div className="box">
              <img className="base3" src={hours} alt="" />
              <p className="base4">Customer Support </p>
              <p className="base5">24 hours Service</p>
            </div>
            <div className="box">
              <img className="base3" src={family} alt="" />
              <p className="base4">Family Size Room </p>
              <p className="base5"> Available Room</p>
            </div>
            <div className="box">
              <img className="base3" src={Conference} alt="" />
              <p className="base4">Conference Room</p>
              <p className="base5">Confernce Room Available</p>
            </div>
            <div className="box">
              <img className="base3" src={wifi} alt="" />
              <p className="base4">Free Wifi Zone </p>
              <p className="base5">24 hours Wifi Zone</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutSection;
