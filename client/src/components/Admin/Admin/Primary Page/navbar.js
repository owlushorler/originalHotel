import Cookies from 'js-cookie'
import jwt from "jwt-decode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navBar.css"

function Navbar(){
    const navigate = useNavigate();
    const token = Cookies.get('jwt')
    if(token){
      var decoded = jwt(token)
    }

    const logOut = ()=>{
        Cookies.remove('jwt')
        navigate("/login");
    }


            // <a className="btn dropdown-toggle account" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

    return(
        <>
        <div className='moveInline'>
    <div className="dropdown account">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    // aria-haspopup="true"
    aria-expanded="false"
  >
    <FontAwesomeIcon icon={faUser} className="inputIcons" />{token ? decoded.username : ""}
  </button>
  <div className="dropdown-menu boot" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item boot-item" href="/changePassword">
      Change Password
    </a>
    <a className="dropdown-item boot-item" onClick={logOut}>
      Log out
    </a>
  </div>
</div>
</div>
</>
    )
}

export default Navbar