import React from 'react';
 import './contactPage.css';
 import image2 from'./banner3.jpg';
 import image3 from'./banner4.jpg';
 import photo from'./photo.avif';
 import photo1 from'./photo1.avif';
 import photo2 from'./photo2.avif';
 import photo3 from'./photo3.webp';
 import  linkedin from './linkedin.png';
 import instagram from './instagram3.png';
 import arrow from './arrow.png';
import twitter from './twitter.png';
import bird from './bird.png';
import logo from './logo.png';
import phone from'./phone1.png';
import location from'./location5.png';

const Footer = () => {
  return (
    <div>
         < footer className=' footer'>
                   
                   <div className='DIV6'>
                      <div className='logo7'>
                     <img src={logo} alt="Hotel" />
                    <h3>H-Control</h3>
                  </div>
                    <p className='logo3'>Continually productize with compelling dome packed with all elated in utilize website and creating supply next-generation
                    </p>
                     <p className='logo3'>Follow Us On: <br />
                      <a href=''> <img src={twitter} alt="twitter" /> </a>
                      <a href=''> <img src={instagram} alt="instagram" /> </a>
                      <a href=''> <img src={linkedin} alt="linkedin" /> </a>
                      </p> 
                   </div>
                
                   <div className='link'>
                     <h6>Usefull Links</h6>
                    <a href="https://www."><img src={arrow} /> Room and Suites</a> <br />
                    <a href=""><img src={arrow} />Restaurant</a> <br />
                    <a href=""><img src={arrow} />Spa Center</a> <br />
                    <a href=""><img src={arrow} />Swimming</a> <br />
                    <a href=""><img src={arrow} />Contact us</a> <br />
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
                       <img src={photo} alt="photo" />
                       <img src={photo1} alt="photo1" /> 
                       <br />
                       <img src={photo2} alt="photo2" />
                          
                       <img src={photo3} alt="photo3" />
                       <br />
                       <img src={image3} alt="image3" /> 
                      <img src={image2} alt="image2" />
                   </div>
                  
                </footer>
      
    </div>
  )
}

export default Footer
