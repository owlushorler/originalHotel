import React, {useState} from 'react';
import axios from 'axios';
 
 import './contactPage.css';
 import banner from'./banner2.jpg';
 import image2 from'./banner3.jpg';
 import image3 from'./banner4.jpg';
 import photo from'./photo.avif';
 import photo1 from'./photo1.avif';
 import photo2 from'./photo2.avif';
 import photo3 from'./photo3.webp';
 import location from'./location5.png';
 import phone from'./phone1.png';
 import email from'./email.png';
 import icon2 from'./icon2.png'; 
 import  linkedin from './linkedin.png';
 import instagram from './instagram.png';
 import arrow from './arrow.png';
import twitter from './twitter.png';
import bird from './bird.png';
import logo from './logo.png';
import Nav2 from '../home/nav2/nav2';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
     subject: "",
     message: "",
  });

  const [emailData, setEmailData] = useState('');
    

   const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
     
     
   };
  
    const handleSubmit = async(e) => {
      e.preventDefault();

       try{
        const response = await axios.post('http://localhost:8000/api/submit', formData);
        console.log(response.data);
        alert(response.data.message)
       } catch (error) {
        console.error('Error submitting form:', error);

       }

       setFormData({
        name: "",
        email: "",
         subject: "",
         message: "",
      })
      };  

        const handleEmailSubmit = async(e) => {
          e.preventDefault();

          try {
             const response = await axios.post('http://localhost:8000/api/subscribe', {email: emailData});

              console.log('Subscription email sent successfully:', emailData);
              alert(response.data.message)
              console.log(response)
               setEmailData('');
          } catch (error) {
            console.log('Error sending subscription email:',error);
          }
        };
     


  return (
    
    <div>
           <Nav2/>
             <div className='Sall'>
           <header className='header-nav'>
         

        </header>
           
            <div className='BANNER-HERO'>
                 <div className="hero">

                <img src={banner} alt="hero-image" />      
                 </div>
        <div className="place">
             <h5 className='mid'><a href='#'>Contact Us</a></h5> 
               <h6>Home / Contact us</h6>
                 
            </div>
            </div>
     


         <div className='section1'>
          <div className='sectionDiv-1'>
             <h2>H-Control</h2>
              <p>Know More About Our Hotel.</p>
                <p>Continually productize compelling quality for packed in business consulting elated < br/> productize compelling quality for all packed in with all growth from quality elated < br/>
                  setting up to website and creating pages </p>

                 <article className='bob'>
                   
                   <img src={location} />
                   <p className='p1'>
                    <h6> Office  Address</h6>
                    
                      Suite 1307, Level 12, Tropical Center 218 <br/>
                       New Elephant Road, Dhaka- 1205
                   </p>
                   
                   <img src={phone} />
                   <p className='p1'>
                    <h6> Phone number</h6>
                     +2348012875643, 01009-814600<br/>
                       02-960030
                      
                   </p>
                    <img src={email} />
                      <p className='p1'>
                    <h6> Email  Address</h6>
                       support@tavern.com<br/>
                       support@tavernInfo.com
                      </p>
                   
                     
                  </article>
          </div>

          <div className=' sectionDiv-2'>

              <article className='article-1'>
                  <h6>Send us a Message </h6>
                  <form onSubmit={handleSubmit} className='form-1'>
                   <input type="text" name='name' value={formData.name} onChange={handleChange} className='text' placeholder='Your Name'/>
                   <input type="email" name='email' value={formData.email} onChange={handleChange} className='text'placeholder='Your Email'/> <br/>
                   <input type="text" name= 'subject' value={formData.subject} onChange={handleChange} className='subject text' placeholder='Subject'/> <br />
                    <textarea name='message' value={formData.message} onChange={handleChange} className="text area" id="" cols="30" rows="10" placeholder='Your Message'></textarea> <br />
                    <button type="submit" className='text submit'>Submit Now</button>    
                  </form>
                </article> 
             
          </div>
         </div>


         {/* <emailSubscription/> */}
        <div className="form2">
            <h6 className='p2'> GET UPDATE</h6>
              <h6 className='p2'>Get Latest Updates And Deals</h6>

             <form onSubmit={handleEmailSubmit} className='task'>
               <input type="email" value={emailData} onChange={(e) => setEmailData(e.target.value)} className='text1' placeholder='Enter your Email' />
                <button type='submit' className='button2'>SUBSCRIBE</button>
             </form>
        </div>
        </div>

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

export default ContactPage
