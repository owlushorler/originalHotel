import AboutSection from "./aboutPage/AboutPage"
import Caro from "./coro/coro"
import Foot from "./foot"
import Topnav from "../home/nav/nav"
import Nav2 from "../home/nav2/nav2"

function About(){
    return(
        <div>
        <Topnav/>
        <Nav2/>
         <AboutSection/>
        <Caro/>
        <Foot/>
        </div>
    )
}

export default About