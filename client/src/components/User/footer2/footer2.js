
import React from 'react'
 
 import '../facil/facilityPage.css'
 
 import pool1 from'../facil/pool1.jpg';
 import image2 from'../facil/banner3.jpg';
 import image3 from'../facil/banner4.jpg';
 import photo from'../facil/photo.avif';
 import photo1 from'../facil/photo1.avif';
 import photo2 from'../facil/photo2.avif';
 import photo3 from'../facil/photo3.webp';
 import location from'../facil/location5.png';
 import phone from'../facil/phone1.png';
 import  linkedin from '../facil/linkedin.png';
 import instagram from '../facil/instagram3.png';
 import arrow from '../facil/arrow.png';
import twitter from '../facil/twitter.png';
import bird from '../facil/bird.png';
import logo from '../facil/logo.png';
 ////import banner from './banner4.jpg';
 //import Restaurant from './restaurant2.png'
 // import spa from './spa.jpg';
//  import swim from './swim2.png';
//  import fit from './fitness.png';
//  import wifi from './wifi1.png';
//  import car from './car3.jpg';
//import Nav2 from "../home/nav2/nav2"
// import FacilityCard from './FacilityCard' ;

const Ffac = () => {

  return (
      
           
    <div className='sbg'>
      {/* < FacilityCard /> */}

        <div style={{marginTop:"1vw"}} className="form2">
            <h6 className='p2'> GET UPDATE</h6>
              <h6 className='p2'>Get Latest Updates And Deals</h6>

             <form className='task'>
               <input type="text" className='text1' placeholder='Enter your Email'/>
                <button className='button2'>SUBSCRIBE</button>
             </form>


   

        </div>

        < div style={{marginBottom:"-1vw"}} className=' footer'>
                   
           <div className='DIV6'>
              <div className='logo7'>
             <img style={{width:"5vw"}} src={logo} alt="Hotel" />
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
        
    
  )
}


export default Ffac