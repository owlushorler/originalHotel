import "./LandingPage.css";
import image from "./H-Control.png"
import {Link} from 'react-router-dom'


function LandingPage(){
    return(
        <>
            <div className="landingContainer">
                <div className="container3">
                    <Link to="/login">
                        <img src={image} alt="H-Control logo" />
                    </Link>
                        <h1>H-CONTROL</h1>
                </div>
            </div>
        </>
    )
}

export default LandingPage