import React, { useState } from "react";
import "./changePassword.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import jwt from 'jwt-decode'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router";


function  ChangeUsername() {


  const navigate = useNavigate()
  const token = Cookies.get('jwt')
  const decoded = jwt(token)
  const [oldUsername, setOldUsername] = useState(decoded.username)
  const [newUsername, setNewUsername] = useState('')
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState('')
  const [error, setError] = useState("");

  async function handleChangePassword(e) {
    e.preventDefault();
    // Perform the delete operation on the API endpoint
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

      try {
      
      const user ={
        oldUsername: decoded.username,
        newUsername: newUsername,
        newPassword: newPassword,
        oldPassword: oldPassword
      }
      axios.put(`http://localhost:5002/api/admin`, user)
      .then((res)=>{
        console.log(res)

        setError(res.data.error)
        navigate('/login')
      })
      ;


      setError("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
   
  
    } catch (error) {
      console.error('Error deleting item:', error);
    }


  }

  return (
    <>
    <div className="major">
      <h2 className="loginTitle">Change Username</h2>
    <div className="login">

      <form className="loginForm" onSubmit={handleChangePassword}>

      <label className="white">Old Username</label>
        <div className="inputWithIcon">
          <input

            type="text"
            className="loginInput"
            value={oldUsername}
            onChange={(e) => setOldUsername(e.target.value)}
            readOnly

          />
          <FontAwesomeIcon icon={faLock} className="inputIcon" />
        </div>

        <label className="white">New Username</label>
        <div className="inputWithIcon">
          <input

            type="text"
            className="loginInput"
            placeholder="Enter your new username..."
=======
           
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} className="inputIcon" />
        </div>

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

        {error && <div className="error-message">{error}</div>}
        <button className="loginButton" type="submit">
          Change Password
        </button>
      </form>
    </div>
    </div>
    </>
  );
}

export default ChangeUsername
