import BgColor from "./bgColor/bgColor"
import "../../../../App.css";
import DropdownCollection from "./dropdown/DropdownCollection"
import CardSchemes from "../cards/CardSchemes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import Footer from "../../../User/rooms/footer/Footer";
import Topnav from "../../home/nav/nav";
import Nav2 from "../../home/nav2/nav2";
function Rooms(){
    return(
        <div>
            <Topnav/>
            <Nav2/>
            <BgColor/>
            <DropdownCollection/>
            <CardSchemes />
            <SubscriptionForm/>
            <Footer/>
        
        </div>
    )
}

export default Rooms