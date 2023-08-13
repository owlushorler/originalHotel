import { useState, useEffect } from "react";
import axios from "axios"
import "./addEmployee.css"

function AddEmployee (){
    const [department, setDepartment] = useState("")
    const [age, setAge] = useState("")
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    
    
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
    
    const handleSubmit = async (event) =>{
        event.preventDefault()
        let employeeData = {
            firstName: input1,
            lastName: input2,
            department: department,
            age: age
        }
        console.log(employeeData)
        let dta = await fetch("http://localhost:5002/employee/addEmployee", {
                method: "post",
                headers:{
                        "Content-Type": "application/json"
                    },
                body: JSON.stringify(employeeData)
                }).then(response=>response.json()).then(data=>{
                        console.log(data)
                    })
                    
                    console.log(dta)
                }

        // axios.post("http://localhost:5000/employee/addEmployee", employeeData).then(()=>{
        //     console.log(employeeData)
        // })
        // console.log(employeeData)
        
    

    return (
        <>
            <div className="container-fluid contain ">
                <div className="formHolder ">
                    <form className="form container-sm" onSubmit={handleSubmit}>
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
                                    <input className="ageInput" type="number" min="18" max= "65" placeholder=""  onChange={handleChangeAge}/>
                                </div>
                                <input className="fileInput" type="file" />
                                <button className="formButton" type="submit">DONE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            
        </>
    )
}

export default AddEmployee