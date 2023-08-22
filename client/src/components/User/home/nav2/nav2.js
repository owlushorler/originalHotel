import "../nav2/nav.css"
import nnn from "../../../imagesfolder/MicrosoftTeams-image (1).png"
import { Link } from "react-router-dom"
import lopp from "../../../../components/User/card/basket-cart-icon-27.png"

function Nav2(prop){
    const {rat, ret}= prop
    
    return(
        <div className="ac" >
            <nav style={{marginRight:"20vw"}} ><a className="aa" href=""><img style={{width:"3vw",marginLeft:"-13vw", marginRight:"1vw"}} src={nnn} alt="oo"/>H CONTROL</a></nav>
            <nav><Link className="aa"  to='/' >HOME</Link></nav>
            <nav><Link className="aa"  to='/fac' >FACILITY</Link></nav>
            <nav><Link className="aa"  to='/room' >ROOMS</Link></nav>
            <nav><Link className="aa"  to='/about' >ABOUT</Link></nav>
            <nav><Link className="aa"  to='/contact' >CONTACT</Link></nav>
            <nav><Link to="/room" ><button className="di" > 
                <img style={{width:"2vw"}} src={lopp} alt="o" onClick={()=>ret()} />  {rat}
              </button></Link></nav>
            <nav> </nav>
        </div>
    )
}

export default Nav2