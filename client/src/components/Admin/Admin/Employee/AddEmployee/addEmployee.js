import { useState, useEffect } from "react";
import axios from "axios"
import "./addEmployee.css"
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import SuperAdmin from "../../Login/SuperAdmin";
import Navbar from "../../Primary Page/navbar";


function AddEmployee (){
    const token = Cookies.get('jwt');
    // console.log(token)
    const [department, setDepartment] = useState("")
    const [age, setAge] = useState("")
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [image, setImage] = useState("")
    const [reply, setReply] = useState("")
    const [isLoggedIn, setIsLoggedIn]= useState(token !== undefined)
    const navigate = useNavigate();
    const [error, setError] = useState("")
    
    
    const handleChangeDepart = (e)=>{
        setDepartment(e.target.value);
    }
    const handleChangeAge = (e)=>{
        setAge(e.target.value);
    }
    const handleInput1 = (e)=>{
        setInput1(e.target.value);
    }
    const handleInput2 = (e)=>{
        setInput2(e.target.value);
    }
    const handleImage = (e)=>{
        setImage(e.target.files[0])
    }

     
    const handleSubmit = async (event) =>{
        event.preventDefault()
        if(input1.trim() == ""){
            alert("Fill in First Name")
        } else if(input2.trim() == ""){
            alert("Fill in Last Name")
        } else if (department.trim() == ""){
            alert("Select Department")
        }else if (age.trim() == ""){
            alert("Fill in Age")
        }

        const formData = new FormData()
        formData.append("firstName", input1)
        formData.append("lastName", input2)
        formData.append("department", department)
        formData.append("age", age)
        formData.append("file", image)

        try{
        const response = await axios.post("http://localhost:5002/api/employees", formData)
 
            if(response.status === 201){
                console.log(response)
                setReply(response.data)
                alert("Employee successfully added")
                navigate('/employees')
            } else {
                setError(response.data)
                // navigate('/employees')
            }
        } catch(error){
            if (error.response && error.response.status === 400) {
                console.log(error.response.data)
                setError(error.response.data); // Assuming the error message is in the response data
              } else {
                setError("An error occurred. Please try again later."); // Generic error message for other errors
              }
        }
    }
    //     // console.log(employeeData) 

    return (
        <>
        {isLoggedIn ? (
            <div>
                <Navbar />
            <div>
            <div className="container-fluid contain ">
                    <h1>ADD EMPLOYEE</h1>
                <div className="formHolder ">
                    <form className="form container-sm" action="/upload" method="POST" enctype="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <input className="employeeInput " type="text"  placeholder="First Name"  onChange={handleInput1}/>
                                <input className="employeeInput" type="text"  placeholder="Last Name"  onChange={handleInput2}/>
                                <div className="depart">
                                    <select className="employeeDropDown" value={department} onChange={handleChangeDepart}>
                                        <option  value="">Department</option>
                                        <option className="selectHover" value="Administrative">Administrative</option>
                                        <option value="Security">Security</option>
                                        <option value="Kitchen">Kitchen</option>
                                        <option value="Bar">Bar</option>
                                    </select>
                                    <label className="lab">Age</label>
                                    <input className="ageInput" type="number" min="18" max= "65" placeholder="18"  onChange={handleChangeAge}/>
                                </div>
                                <input className="fileInput" type="file" onChange={handleImage} />
                                <button className="formButton" type="submit">DONE</button>
                            </div>
                        </div>
                    </form>
                </div>
               {reply && <p className="reply">{reply}</p>}
                {error && <div className="error-message">{error}</div>}
            </div>
            </div>

            </div>
        ) :  (
            <SuperAdmin />
        )}
            
        </>
    )
}


export default AddEmployee