import BgColor from "./bgColor/bgColor"
import "../../../../App.css";
import DropdownCollection from "./dropdown/DropdownCollection"
import CardSchemes from "../cards/CardSchemes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import Footer from "../../../User/rooms/footer/Footer";
import Topnav from "../../home/nav/nav";
import Nav2 from "../../home/nav2/nav2";
import Ffac from "../../footer2/footer2";
function Rooms(){
    return(
        <div>
            <Topnav/>
            
            
           {/* <DropdownCollection/>*/}
            <CardSchemes />
           {/* <SubscriptionForm/>*/}
            
        <Ffac/>
        </div>
    )
}

export default Rooms