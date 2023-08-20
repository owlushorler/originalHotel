
import React from 'react';
import image4 from './imagefolder/images/pexels-pixabay-271643.jpg';
import './foot.css'

function Foot() {
  return (
    <div>
      <div className="footar">
        <img src={image4} alt="" />
        <div className='words'>
          <h4 style={{ color: "#d4af37"}}>Discover the Ultimate Comfort and Luxury at H-Control</h4>
          <p>
          At The H-Control, we take pride in providing impeccable service that exceeds
          your expectations. Our dedicated staff is committed to ensuring your stay is flawless, 
          from check-in to check-out. Your comfort and satisfaction are our top priorities.
          </p>
          <p>
          Experience a world of luxury, comfort, and impeccable service at The H-Control. 
          Whether you're seeking a romantic getaway, a family vacation, or a business trip, our hotel 
          offers an oasis of relaxation and indulgence. Book your stay today and embark on a journey
          of unparalleled hospitality and sophistication.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foot;
