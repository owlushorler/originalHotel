import React, { useState } from "react";
import "./changePassword.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"

async function  ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState('')
  const [error, setError] = useState("");

  async function handleChangePassword(e) {
    e.preventDefault();
    const user ={
      oldUsername: decoded.username,
      newUsername: newUsername,
      newPassword: newPassword
    }
    try {
      // Perform the delete operation on the API endpoint
      axios.put(`http://localhost:5002/api/admin`, user)
      .then((res)=>{
        console.log(res)
        setResponse(res)
        navigate('/login')

      })
      ;
    // let con = prompt("Confirm your password");
    // if(con == )
      setData((prevData) => prevData.filter((item) => item._id !== itemId));
      // setData(() => prevData.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }

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
