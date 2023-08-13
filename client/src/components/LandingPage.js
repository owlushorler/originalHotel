import React from 'react';
import './landingPage.css';
// import image1 from './icon.png'
// import image2 from './solid.png'


function LandingPage(){

return(
        <div className='container'>
            <h1><span className='hotel'>H</span>otelTonigh<span className='night'>t</span></h1>
            <hr/>
            {/* <img className='logo' src={image1} alt=""/> */}
            <a href="URL_OF_THE_LINK">
                <div className='admin'>
                    {/* <img className='solid' src={image2} alt=""/> */}
                    <p className='super1'>Admin</p>
                </div>
            </a>
            <a href="URL_OF_THE_LINK">
                <div className='admin1'>
                    {/* <img className='solid' src={image2} alt=""/> */}
                    <p className='super'> Super Admin</p>
                </div>
            </a>
        </div>
       
)
}
export default LandingPage;
