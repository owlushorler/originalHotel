import React from "react";
import HtControl from "../../../imagesfolder/H-Control.png";
import "./footer.css"; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            {" "}
            <img style={{width:"5VW"}} src={HtControl} alt="Logo" className="logo-img" />
          </div>
          <div className="footer-links">
            {/* <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact</a> */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
