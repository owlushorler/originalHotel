import { useState, useEffect } from 'react'
// import  '../../Admin/Employee/EmployeeCard.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Admin/Primary Page/navbar';
import "./viewAdmin.css"
import bin from "../../../imagesfolder/icons8-bin-50.png"

  const ViewAdmin = () => {
  const [data, setData] = useState([])

   useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5002/api/admins'); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
    
    // setData(AdminData)
  }, []);

   const handleDelete = async (itemId) => {
    try {
      // Perform the delete operation on the API endpoint
      await fetch(`http://localhost:5002/api/admins/${itemId}`, {
        method: 'DELETE',
      });
    // let con = prompt("Confirm your password");
    // if(con == )
      setData((prevData) => prevData.filter((item) => item._id !== itemId));
      // setData(() => prevData.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <>
    <div>
      <Navbar />
       <div className='major'>
          <h1 className='h2 text' >COMPANY ADMINS</h1>
          <div className='mainContainer'>
              {data.map((employee)=>{
                return (
                <div className='card2 ' key={employee._id}>
                  <div className="employee-details">
                    <h2> <span className='wordHeading'>Full Name: </span> {`  ${employee.firstName} ${employee.lastName}`}</h2>
                    <p><span className='wordHeading'>Email:</span> {employee.email}</p>
                    <p><span className='wordHeading'>Username:</span>  {employee.username}</p>
                    </div>
                    <img src={bin} className='yunBin' onClick={() => handleDelete(employee._id)} />
                  {/* <button className='btn btn-primary cardButton' onClick={() => handleDelete(employee._id)}>Delete</button> */}
                </div>  
            );
              })};
          </div>
              <button className='addAdminBtn'><Link style={{textDecoration: "none", color: "#fff"}} to="/superAdmin/addAdmin">Add Admin</Link></button>
    </div>
    </div>
   </>
  );
};

export default ViewAdmin


