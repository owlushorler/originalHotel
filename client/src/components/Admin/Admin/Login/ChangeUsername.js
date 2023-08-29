import React, { useState } from "react";
import "./changeUsername.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock} from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie'
import jwt from "jwt-decode"
import { useNavigate } from "react-router";
import axios from "axios"
import SuperAdmin from "./SuperAdmin";


function ChangePassword() {
    const navigate = useNavigate()
    const token = Cookies.get('jwt');
    if(token){
      var decoded = jwt(token)
    }
  const [isLoggedIn, setIsLoggedIn]= useState(token !== undefined)
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [reply, setReply] = useState('')
  const [error, setError] = useState("");
  const [username, setUsername] = useState(token ? decoded.username : "")


  async function handleChangePassword(e) {
    e.preventDefault();
    if (
      oldPassword.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    

    
    console.log("Old password:", oldPassword);
    console.log("New password:", newPassword);

    const user ={
        oldUsername: decoded.username,
        oldPassword: oldPassword,
        newPassword: newPassword
      }
      try {
        const response = await axios.put(`http://localhost:5002/api/admin`, user)
        // .then((res)=>{
        //   console.log(res.data)
          if(response.status === 200){
            setReply(response.data)
            alert(reply)
            navigate('/login')
          }else{
            console.log(response.data.message)
            setError(response.data.error)
          }
    
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data)
          setError(error.response.data); // Assuming the error message is in the response data
        } else {
          setError("An error occurred. Please try again later."); // Generic error message for other errors
        }
      }


    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  return (
    <>
    {isLoggedIn ? (
    <div className="major">
      <h4 className="ploginTitle">Change Password</h4>
    <div className="plogin">
      <form className="loginForm" onSubmit={handleChangePassword}>
        <label className="white">Old Password</label>
        <div className="inputWithIcon">
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your old password..."
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} className="inputIcon" />
        </div>

        <label className="white">New Password</label>
        <div className="inputWithIcon">
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your new password..."
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} className="inputIcon" />
        </div>

        <label className="white">Confirm New Password</label>
        <div className="inputWithIcon">
          <input
            type="password"
            className="loginInput"
            placeholder="Confirm your new password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} className="inputIcon" />
        </div>
        {error && <p className="error-paragraph">{error}</p>}

       <button className="loginButton" type="submit">
          Change Password
        </button>
      </form>
    </div>
    </div>
       ) :  (
        <SuperAdmin />
    )}
    </>
  );
}

export default ChangePassword
