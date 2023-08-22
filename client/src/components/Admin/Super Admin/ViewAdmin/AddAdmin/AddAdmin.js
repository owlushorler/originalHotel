 import { useState, useEffect } from "react";
import axios from "axios"
import "./AddAdmin.css"
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../Admin/Primary Page/navbar";
import SuperAdmin from "../../../Admin/Login/SuperAdmin";
import Cookies from 'js-cookie'


function AddAdmin (){
    const token = Cookies.get('jwt');
    // const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [reply, setReply]= useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn]= useState(token !== undefined)
    
    
    // const handleUsername = (e)=>{
    //     setUsername(e.target.value);
    // }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handleInput1 = (e)=>{
        setInput1(e.target.value);
    }
    const handleInput2 = (e)=>{
        setInput2(e.target.value);
    }
    
    const handleSubmit = async (event) =>{
        event.preventDefault()
        if(input1.trim() == ""){
            alert("Fill in First Name")
        } else if(input2.trim() == ""){
            alert("Fill in Last Name")
        } else if (email.trim() == ""){
            alert("Fill in Email")
        } else{
        let adminData = {
            firstName: input1,
            lastName: input2,
            // username: username,
            email: email
        }
        console.log(adminData)

        try{
        const response = await axios.post("http://localhost:5002/api/admin", adminData)
        if (response.status === 201){
            console.log(response.data)
            setReply(response.data)
            alert(reply)
            navigate('/superAdmin/admin')
            }else{
                console.log(response.data.message)
                setError(response.data.error)
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
              console.log(error.response.data)
              setError(error.response.data); // Assuming the error message is in the response data
              alert(error.response.data)
            } else {
              setError("An error occurred. Please try again later."); // Generic error message for other errors
            }
          }
        }
    }

   

    return (
        <>
        {isLoggedIn ? (
        <div>
        <Navbar />
            <div className="container-fluid contain ">
            <h1>ADD ADMIN</h1>
                <div className="formHolder ">
                    <form className="form container-sm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <input className="employeeInput " type="text"  placeholder="First Name"  onChange={handleInput1}/>
                                <input className="employeeInput" type="text"  placeholder="Last Name"  onChange={handleInput2}/>
                                <input className="emailInput" type="email"  placeholder="Email"  onChange={handleEmail}/>
                                {/* <input className="usernameInput" type="text"  placeholder="Preferred Username"  onChange={handleUsername}/> */}
                                <button className="formButton" type="submit">DONE</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* {error && <p className="error-paragraph">{error}</p>} */}
            </div>
            </div>

) :  (
    <SuperAdmin />
)}
        </>
    )
}


export default AddAdmin