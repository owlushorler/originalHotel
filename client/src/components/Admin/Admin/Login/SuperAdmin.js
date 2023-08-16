import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./superAdmin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie'
import jwt from "jwt-decode"

export default function SuperAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [notification, setNotification] = useState(null)
  const navigate = useNavigate();
   
  useEffect(() => {
    const rememberedCredentials = localStorage.getItem('rememberedCredentials');
  
    if (rememberedCredentials) {
      const { username, password } = JSON.parse(rememberedCredentials);
      setUsername(username);
      setPassword(password);
      setRememberMe(true);
    }
  }, []);


  async function handleClick (e) {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Fill in your username.");
      return;
    }
    if (password.length >= 8) {
      const user = {
        username,
        password,
      };
      console.log("User object:", user);
      try {
        const response = await fetch("http://localhost:5002/api/login", {
          method: 'POST',
          withCredentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        // console.log("fuck")
        if (response.ok) {
          const data = await response.json()
          console.log(data.token)
          const decoded = jwt(data.token)
          console.log(decoded)
          const yes = Cookies.set('jwt', data.token, {
            expires: new Date(2000000000000)
          })
          // const yes = Cookies.get('jwt')
          // console.log(yes)
          if (data.user === "Super Admin") {
            setNotification("Login successful as Super Admin");
            navigate('/superAdmin');
          } else if(decoded.username == "Admin"){
            console.log("fuck you")
            navigate('/changePassword')
          } else {
            console.log("fuck you")
            setNotification(data.reply);
            navigate("/admin/admin");
          }
  
          // if (rememberMe) {
          //   localStorage.setItem('rememberedCredentials', JSON.stringify({ username, password }));
          // }
        } else {
          setNotification("Invalid credentials"); 
        }
      } catch (error) {
        console.error('Error sending data:', error.message);
        setNotification('Error loading data, Please try again'); 
      }
    } else {
      setNotification("Password less than 8");
    }





  }
  function handleRememberMe(e) {
    setRememberMe(e.target.checked);
  }
  return (
    <div className="contain">
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <div className="inputWithIcon">
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FontAwesomeIcon icon={faUser} className="inputIcon" />
        </div>

        <div className="inputWithIcon">
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} className="inputIcon" />
        </div>
        <div>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMe}
            className="checkbox"
          />
          <label className="white">Remember Me</label>
        </div>
        <button className="loginButton" onClick={handleClick}>
          Login
        </button>
        <div>
          <p className="errorPop">{notification}</p>
        </div>
      </form>
    </div>
    </div>
  );
}
