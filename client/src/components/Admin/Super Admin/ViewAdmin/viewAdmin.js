import { useState, useEffect } from 'react'
// import  '../../Admin/Employee/Employee.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Admin/Primary Page/navbar';

  const ViewAdmin = () => {
  const [data, setData] = useState([])

   useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5002/superAdmin/viewAdmins'); // Replace with your API endpoint
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
      await fetch(`http://localhost:5002/superAdmin/viewAdmins/${itemId}`, {
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
          <h1 className='h2 text' >Company Admins</h1>
          <div className='container'>
              {data.map((employee)=>{
                return (
                <div className='card2 ' key={employee._id}>
                  <div className="employee-details">
                    <h2>{`${employee.firstName} ${employee.lastName}`}</h2>
                    <p>{employee.email}</p>
                    <p>{employee.username}</p>
                    </div>
                  <button className='btn btn-primary cardButton' onClick={() => handleDelete(employee._id)}>Delete</button>
                </div>  
            );
              })};
          </div>
              <button className='addEmployeeBtn'><Link to="/superAdmin/addAdmin">Add Admin</Link></button>
    </div>
    </div>
   </>
  );
};

export default ViewAdmin


