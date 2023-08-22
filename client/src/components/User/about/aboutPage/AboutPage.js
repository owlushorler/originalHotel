// import React from "react";
// import "../aboutPage/About.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// //import FontAwesomeIcon from "font-awesome"
// import staff from "../../../imagesfolder/selection_9658493.png";
// import care from "../../../imagesfolder/care_1429505.png";
// import phone from "../../../imagesfolder/bx-phone-incoming.svg";

// import Conference from "../../../imagesfolder/8115105.png";
// import hours from "../../../imagesfolder/7877898.png";
// import family from "../../../imagesfolder/5625449.png";
// import wifi from "../../../imagesfolder/bx-wifi-2.svg";

// // import { Carousel } from 'react-responsive-carousel';

// // import 'react-responsive-carousel/lib/styles/carousel.min.css';
// // import './Carousel.css'

// const AboutSection = () => {
//   return (
//     <div>
//       <>
//         <nav className="navbar navbar-expand-lg, sm">
//           <div className="container">
//             <h2>About </h2>
//           </div>
//         </nav>

//         <div className="card_up">
//          {} <img className="card_up" src={hours} alt="Your staff Alt Text" />
//         </div>

//         <div className="card">
//           <div className="card2"/>
//           <div className="card3"/>
//         </div>

//         <div className="side">
//           <h5> Welcome to our H-Control</h5>
//           <h4> H-Control Has Been Present For Over Two Decade</h4>
//           <p>
//             {" "}
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//             faucibus ipsum nec arcu maximus, eu tempus mauris facilisis. Proin
//             eget urna ac felis luctus feugiat in in est.
//           </p>

//           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//             faucibus ipsum nec arcu maximus, eu tempus mauris facilisis. Proin
//             eget urna ac felis luctus feugiat in in est.
//           </p>

//           <div className="client">
//             <div className="bed">
//               <img className="images" src={<wifi/>} alt="Your bed Alt Text" />
//               <p className="we">200+</p>
//               <p className="w">Available Rooms</p>
//             </div>

//             <div className="staff">
//               <img className="images" src={staff} alt="Your staff Alt Text" />
//               <p className="we">400+</p>
//               <p className="w">Staff Members</p>
//             </div>

//             <div className="care">
//               <img className="images" src={care} alt="Your care Alt Text" />
//               <p className="we">240k+</p>
//               <p className="w">Served Clients</p>
//             </div>
//           </div>
//           <div className="base">
//             <button className="word"> Book Now</button>
//             <img className="phone" src={phone} alt="Your care Alt Text" />
//             <h5> Call Us On 094389369445</h5>
//           </div>
//         </div>

//         <div className="containers">
//           <div className="base2">
//             <h5> H-Control Your Excellent </h5>
//             <h5> choice for Vacation</h5>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               faucibus ipsum nec arcu maximus, eu tempus mauris facilisis. Proin
//               eget urna ac felis luctus feugiat in in est.
//             </p>
//           </div>
//           <div className="four_cards">
//             <div className="box">
//               <img className="base3" src={hours} alt="" />
//               <p className="base4">Customer Support </p>
//               <p className="base5">24 hours Service</p>
//             </div>
//             <div className="box">
//               <img className="base3" src={family} alt="" />
//               <p className="base4">Family Size Room </p>
//               <p className="base5"> Available Room</p>
//             </div>
//             <div className="box">
//               <img className="base3" src={Conference} alt="" />
//               <p className="base4">Conference Room</p>
//               <p className="base5">Confernce Room Available</p>
//             </div>
//             <div className="box">
//               <img className="base3" src={wifi} alt="" />
//               <p className="base4">Free Wifi Zone </p>
//               <p className="base5">24 hours Wifi Zone</p>
//             </div>
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// export default AboutSection;


import React from "react";
import "./AboutApp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bed from "../imagefolder/images/double-bed_6643725.png";
import staff from "../imagefolder/images/selection_9658493.png";
import care from "../imagefolder/images/care_1429505.png";
import phone from "../imagefolder/images/bx-phone-incoming.svg";
// import image from "../images/download (1).jpg";
import Conference from "../imagefolder/images/8115105.png";
import hours from "../imagefolder/images/7877898.png";
import family from "../imagefolder/images/5625449.png";
import wifi from "../imagefolder/images/bx-wifi-2.svg";
import image1 from "../imagefolder/images/pexels-curtis-adams-3773577.jpg";
import image2 from "../imagefolder/images/pexels-taryn-elliott-4112601.jpg";
import image3 from "../imagefolder/images/pexels-vecislavas-popa-1571452.jpg";


const AboutSection = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg, sm">
        <div className="container-fluid mentorcontainer-fluid">
          <h2 id="abt" >About </h2>
          <p id="up">Welcome to  H- Control, where luxury meets comfort and every detail is meticulously crafted to create an unforgettable experience 
          for our guests. Nestled in the heart of a vibrant city, our hotel offers a perfect blend of modern elegance and warm hospitality.</p>
        </div>
      </nav>

      <div className="flex1">
        <div >
          <img className="car_up" src={image1} alt=""></img>
        </div>
        <div className="car2">
          <img src={image2} alt=""></img>
          <img src={image3} alt=""></img>
        </div>

        <div className="side">
          <h3 style={{ color: "#d4af37"}}> Welcome to our H-Control</h3>
          <h5> H-Control Has Been Present For Over Two Decade</h5>
          <p className="ward">
            Embark on a culinary journey at our exquisite restaurants, where our talented chefs create gastronomic
           delights that tantalize the senses. From international cuisines to local specialties, our diverse dining 
           options ensure there's something for every palate. Enjoy a romantic dinner at our rooftop restaurant, savor
            a hearty breakfast at our cozy cafe, or unwind with handcrafted cocktails at our stylish lounge.
          </p>

          

          <div className="client">
            <div className="bed">
              <img className="images" src={bed} alt="Your bed Alt Text" />
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
      </div>

      <div className="containers-fluid">
        
          <div className="four_cards">

          <div className="base2">
          <h4 className="wa" style={{ color: "#d4af37"}}> H-Control Your Excellent </h4>
          <h5 className="wad" style={{ color: "#d4af37"}}> Choice for Vacation</h5>
          <p className="war">
          Pamper yourself at our state-of-the-art spa and wellness center, where a range of treatments and 
          therapies await to rejuvenate your body and mind. Dive into the crystal-clear waters of our sparkling pool, 
          surrounded by lush gardens, or stay active at our well-equipped fitness center.
          </p>
          </div>
        
        <div className="box">
          <div className="bos">
            <img  className="down" src={hours} alt=""></img>
            <p className="say"> Cusromer Support</p>
            <p className="say"> 24 hours Service </p>
          </div>
          <div className="bos">
            <img  className="down"src={family} alt=""></img>
            <p className="say">Family Size Room </p>
            <p className="say">Available Room </p>
          </div>
          <div className="bos">
            <img className="down" src={wifi} alt=""></img>
            <p className="say"> Free Wifi Zone</p>
            <p className="say"> 24 hours Wife </p>
          </div>
          <div className="bos">
            <img  className="down"src={Conference} alt=""></img>
            <p className="say"> Conference Room</p>
            <p className="say"> Conference  Room Available </p>
          </div>
        </div>
        </div>
        

          </div>
        {/* </div> */}
      </div>
  
    
  );
};

export default AboutSection;
