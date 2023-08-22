import React, { useState } from "react";
import "./changeUsername.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock} from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie'
import jwt from "jwt-decode"
import { useNavigate } from "react-router";
import axios from "axios"


function ChangePassword() {
    const navigate = useNavigate()
    const token = Cookies.get('jwt');
    const decoded = jwt(token)

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState(decoded.username)

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

    const user ={
        oldUsername: decoded.username,
        oldPassword: oldPassword,
        newPassword: newPassword
      }
      axios.put(`http://localhost:5002/api/admin`, user)
      .then((res)=>{
        console.log(res)
        setError(res.data.error)
        alert("Password changed successfully!")
        navigate('/login')
      })


    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  return (
    <>
    <div className="major">
      <h4 className="ploginTitle">Forget Password</h4>
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

export default ChangePassword
