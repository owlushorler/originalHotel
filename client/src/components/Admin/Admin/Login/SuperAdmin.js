import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./superAdmin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function SuperAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [reply, setReply] = useState(null)
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
        const response = await fetch("http://localhost:5002/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
       
        if (response) {
          const data = await response.json();
          console.log(data)
          setReply(data);
          if(response.ok){
            // alert(response)
            // console.log(response)
            if(data === "Super Admin"){
              alert(response)
              navigate('/superAdmin')
            }else {
              alert(response)
              navigate("/admin/admin")
            }
            if (rememberMe) {
              // Store credentials in a cookie or local storage
              localStorage.setItem('rememberedCredentials', JSON.stringify({ username, password }));
            }
          } else {
            console.error('Request failed:', response.statusText);
            // console.log(data)
            setReply("Invalid Credentials")
          }
          }
      } catch (error) {
        console.error('Error sending data:', error.message);
      }


    } else {
      alert("Password should be 8 characters or more.");
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
          <p className="errorPop">{reply}</p>
        </div>
      </form>
    </div>
    </div>
  );
}
