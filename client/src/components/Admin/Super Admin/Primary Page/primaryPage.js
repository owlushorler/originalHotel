import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom"
import "./primaryPage.css"
import { useState, useEffect } from "react";
import image from "../../../imagesfolder/checked-user-512.png";
import image2 from "../../../imagesfolder/emplloyee.png";
import image3 from "../../../imagesfolder/bed-2.png";
import image4 from "../../../imagesfolder/Admin-icon.png";
import image5 from "../../../imagesfolder/icons8-booking-58.png";
import Cookies from 'js-cookie'
import SuperAdmin from '../../Admin/Login/SuperAdmin';
import Navbar from '../../Admin/Primary Page/navbar';



function PrimaryPageSuper(){
    const token = Cookies.get('jwt');
    console.log(token)
    const [isLoggedIn, setIsLoggedIn]= useState(token !== undefined)
    return(
        <>
         {isLoggedIn ? (
             <div className="container13">
                <Navbar  />
        <div className="container1">
            
               <Link style={{textDecoration: "none", color: "#fff"}} to='/superAdmin/admin'>
               <div className="primaryCard">
                    <img src={image4} />
                    <h3> Manage Admins</h3>
                </div>
            </Link>

            <Link style={{textDecoration: "none", color: "#fff"}} to="/employees">
                <div className="primaryCard">
                    <img src={image2} />
                    <h3> Manage Employees</h3>
                </div>
            </Link>

            <Link style={{textDecoration: "none", color: "#fff"}} to="/customers">
                <div className="primaryCard">
                    <img src={image} />
                    <h3> Manage Customers</h3>
                </div>
            </Link>

            <Link style={{textDecoration: "none", color: "#fff"}} to="/rooms">
                <div className="primaryCard">
                    <img src={image3} />
                    <h3> Manage Rooms</h3>
                </div>
            </Link>

             <Link style={{textDecoration: "none", color: "#fff"}} to="/getbooking">
             <div className="primaryCard">
                    <img src={image5} />
                    <h3> Manage Booking</h3>
                </div>
            </Link>

        </div>
        </div>
              ) :  (
                <SuperAdmin />
            )}
        </>
    )
}

export default PrimaryPageSuper