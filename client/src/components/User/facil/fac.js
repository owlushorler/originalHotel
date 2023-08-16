
import React from 'react'
 
 import './facilityPage.css'
 import pool1 from'./pool1.jpg';
 import image2 from'./banner3.jpg';
 import image3 from'./banner4.jpg';
 import photo from'./photo.avif';
 import photo1 from'./photo1.avif';
 import photo2 from'./photo2.avif';
 import photo3 from'./photo3.webp';
 import location from'./location5.png';
 import phone from'./phone1.png';
 import  linkedin from './linkedin.png';
 import instagram from './instagram3.png';
 import arrow from './arrow.png';
import twitter from './twitter.png';
import bird from './bird.png';
import logo from './logo.png';
 import banner from './banner4.jpg';
 import Restaurant from './restaurant2.png'
  import spa from './spa.jpg';
  import swim from './swim2.png';
  import fit from './fitness.png';
  import wifi from './wifi1.png';
  import car from './car3.jpg';
import Nav2 from "../home/nav2/nav2"
// import FacilityCard from './FacilityCard' ;

const fac = () => {

  return (
      <>
            <Nav2/>
    <div className='sbg'>
      
           
            <div className='BANNER-HERO'>
                 <div className="hero">

                <img src={banner} alt="" />      
                 </div>
        <div className="place">
             <h5 className='mid'><a href='#'>Hotel Services</a></h5> 
               <h6>Home / Pages / Services</h6>
                 
            </div>
            </div>

                    <div className='wrap'>
                      <div className='head'>
                    <h1>OUR SERVICES</h1>
                     <h3>Hotel Facilities</h3>
                     </div>
                     <div className='DIV-WRAPPER'>
                      <div className='rest'>
                      < img src={Restaurant} alt='' className='image' />
                    <h4>Restaurant</h4>
                     <h5>Indulge in a culinary journey like no other at our renowned restaurant.</h5>
                    
                 </div>

                 <div className='spa'>
                   <img src={spa} alt="" />
                     <h4>Spa Center</h4>
                  <h5>Relax and rejuvenate in our opulent spa center, a sanctuary of serenity amidst the bustling city.</h5>
                 </div>


                 <div className='swim'>
                   <img src={swim} alt="" />
                    <h4>Swimming Pool</h4>
                  <h5>Dip into luxury at our pristine swimming pool, where crystal-clear waters beckon you to unwind and bask in the sun's warm embrace.</h5>
                 </div>
                 
                     <div className='fit'>
                   <img src={fit} alt="" />
                    <h4>Fitness Center</h4>
                  <h5>Elevate your wellness journey at our state-of-the-art fitness center, equipped with cutting-edge exercise machines and a dedicated team of personal trainers.</h5>
                 </div>

                 <div className='wif'>
                  <img src={wifi} alt="" />
                    <h4>High Speed Wifi</h4>
                  <h5>Stay connected effortlessly with our blazing-fast, high-speed WiFi throughout the premises. </h5>
                 </div>

                 <div className='car'>
                   <img src={car} alt="" />
                    <h4> Car Parking</h4>
                  <h5>Your convenience is our priority, which is why we offer secure and ample car parking facilities for our guests.</h5>
                 </div>

              </div>


                 <div className='wrapper'>
                  <div>
                    <img src={pool1} alt="" />
                  </div>
                 </div>


               {/* < FacilityCard /> */}

        <div className="form2">
            <h6 className='p2'> GET UPDATE</h6>
              <h6 className='p2'>Get Latest Updates And Deals</h6>

             <form className='task'>
               <input type="text" className='text1' placeholder='Enter your Email'/>
                <button className='button2'>SUBSCRIBE</button>
             </form>


   

        </div>

        < div className=' footer'>
                   
           <div className='DIV6'>
              <div className='logo7'>
             <img src={logo} alt="Hotel" />
            <h3>H-Control</h3>
          </div>
            <p className='logo3'>Continually productize with compelling dome packed with all elated in utilize website and creating supply next-generation
            </p>
             <p className='logo3'>Follow Us On: <br />
              <a href='#'> <img src={twitter} alt="twitter" /> </a>
              <a href='#'> <img src={instagram} alt="instagram" /> </a>
              <a href='#'> <img src={linkedin} alt="linkedin" /> </a>
              </p> 
           </div>
        
           <div className='link'>
             <h6>Usefull Links</h6>
            <a href="https://www."><img src={arrow} /> Room and Suites</a> <br />
            <a href="#"><img src={arrow} />Restaurant</a> <br />
            <a href="#"><img src={arrow} />Spa Center</a> <br />
            <a href="#"><img src={arrow} />Swimming</a> <br />
            <a href="#"><img src={arrow} />Contact us</a> <br />
           </div>
           <div className='contact-info'>
             <h6>Contact info</h6>
              <img src={phone} alt="phone" />
                <p>+23480367930
                    <br />
                   +01-234569
                   </p>
              <img src={bird} alt="bird" />
              <p>Mon-Fri 08:00-18:00 <br />
                  (except public holidays)
                </p>
              <img src={location} className = 'local'alt="location" />
                <p>
                  65/5 Fashola way,Surulere <br />
                   Lagos
                </p>
           </div>
           <div className='footer-4'>
               <h6>Gallery</h6>
               <img src={photo} alt="" />
               <img src={photo1} alt="" /> 
               <br />
               <img src={photo2} alt="" />
                  
               <img src={photo3} alt="" />
               <br />
               <img src={image3} alt="" /> 
              <img src={image2} alt="" />
           </div>
          
        </div>

    </div>
    </>
  )
}

export default fac