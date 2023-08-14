import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom"
import { Routes, Route } from 'react-router-dom';
import "./primaryPage2.css"
import image from "../../../imagesfolder/checked-user-512.png";
import image2 from "../../../imagesfolder/emplloyee.png";
import image3 from "../../../imagesfolder/bed-2.png";
import image4 from "../../../imagesfolder/icons8-booking-58.png";
import image5 from "../../../imagesfolder/bed.png";
import ViewEmployeeCard from '../Employee/EmployeeCard';
import ViewRooms from '../Rooms/viewRooms';




function PrimaryPage(){
    return(
        <>
        <div className="container1">
            <Link to="/employees">
                <div className="primaryCard">
                    <img src={image2} />
                    <h3> Manage Employees</h3>
                </div>
            </Link>

            <Link to="/customers">
                <div className="primaryCard">
                    <img src={image} />
                    <h3> Manage Customers</h3>
                </div>
            </Link>

            <Link to="/rooms">
                <div className="primaryCard">
                    <img src={image3} />
                    <h3> Manage Rooms</h3>
                </div>
            </Link>

            <Link  to="/rooms">
                <div className="primaryCard">
                    <img src={image4} />
                    <h3> Manage Booking</h3>
                </div>
            </Link>

        </div>
        </>
    )
}

export default PrimaryPage