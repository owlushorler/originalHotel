import "../nav2/nav.css"
import nnn from "../../../imagesfolder/MicrosoftTeams-image (1).png"
import { Link } from "react-router-dom"

function Nav2(){
    return(
        <div className="ac" >
            <nav style={{marginRight:"16vw"}} ><a className="aa" href=""><img style={{width:"3vw",marginLeft:"-3vw", marginRight:"1vw"}} src={nnn} alt="oo"/>H COUNTROL</a></nav>
            <nav><Link className="aa"  to='/' >HOME</Link></nav>
            <nav><Link className="aa"  to='/fac' >FACILITY</Link></nav>
            <nav><Link className="aa"  to='/room' >ROOMS</Link></nav>
            <nav><Link className="aa"  to='/about' >ABOUT</Link></nav>
            <nav><Link className="aa"  to='/contact' >CONTACT</Link></nav>
            <nav><button className="di" > <Link style={{textDecoration: "none", color: "black"}} to="/booking">
                BOOKING NOW
              </Link></button></nav>
            <nav> </nav>
        </div>
    )
}

export default Nav2