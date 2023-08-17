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
    const [isLoggedIn, setIsLoggedIn]= useState(token !== undefined)
    const navigate = useNavigate();
    
    
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
        // let employeeData = {
        //     firstName: input1,
        //     lastName: input2,
        //     department: department,
        //     age: age,
        //     image: image
        // }
        // console.log(image);
        // console.log(employeeData)
        const formData = new FormData()
        formData.append("firstName", input1)
        formData.append("lastName", input2)
        formData.append("department", department)
        formData.append("age", age)
        formData.append("file", image)
        // let dta = await fetch("http://localhost:5002/employee/addEmployee", {
        //         method: "post",
        //         headers:{
        //                 "Content-Type": "application/json"
        //             },
        //         body: JSON.stringify(employeeData)
        //         }).then(response=>response.json()).then(data=>{
        //                 console.log(data)
        //             })
        //             // this.setState({ image: event.target.files[0] });
        //             console.log(dta)
        //         }

        axios.post("http://localhost:5002/api/employee", formData)
         .then((res)=> {
            console.log(res)
            navigate('/employees')
         })
         .catch(err=> console.log(err))
    }
        // console.log(employeeData) 

    return (
        <>
        {isLoggedIn ? (
            <div>
                <Navbar />
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
                                    <label>Age</label>
                                    <input className="ageInput" type="number" min="18" max= "65" placeholder="18"  onChange={handleChangeAge}/>
                                </div>
                                <input className="fileInput" type="file" onChange={handleImage} />
                                <button className="formButton" type="submit">DONE</button>
                            </div>
                        </div>
                    </form>
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