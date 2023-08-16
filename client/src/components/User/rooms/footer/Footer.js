import React from "react";
import HtControl from "../../../imagesfolder/H-Control.png";
import "./footer.css"; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="abu-footer">
      <div className="abu-container">
        <div className="abu-footer-content">
          <div className="abu-footer-logo">
            {" "}
            <img
              style={{ width: "5VW",
            marginLeft: "10px",
            }}
              src={HtControl}
              alt="Logo"
              className="abu-logo-img"
            />
          </div>
          <div className="footer-links">
            {/* <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact</a> */}
          </div>
        </div>
        <div className="abu-footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
