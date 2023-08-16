import React, { useState } from "react";
import "./superAdmin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie'
import jwt from "jwt-decode"

export default function ChangeUsername() {
    const token = Cookies.get('jwt');
    const decoded = jwt(token)





  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http://localhost:5002/api/admins'); // Replace with your API endpoint
//         const jsonData = await response.json();
//         setData(jsonData.);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();

  function handleChangePassword(e) {
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

    setError("Password changed successfully!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="login">
      <span className="loginTitle">Forget Password</span>
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

        {error && <div className="error-message">{error}</div>}
        <button className="loginButton" type="submit">
          Change Password
        </button>
      </form>
    </div>
  );
}
