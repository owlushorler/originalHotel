import { useState, useEffect } from 'react'
// import  '../../Admin/Employee/EmployeeCard.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Admin/Primary Page/navbar';
import "./viewAdmin.css"
import bin from "../../../imagesfolder/icons8-bin-50.png"
import jwt from "jwt-decode"
import Cookies from 'js-cookie'

  const ViewAdmin = () => {
    const token = Cookies.get('jwt');
    const decode = jwt(token)
  const [data, setData] = useState([])
  const [itemId, setItemId] = useState(null)
  const [error, setError]= useState('')
  const [username, setUsername] = useState('')

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

  const handleUsername =(e)=>{
    setUsername(e.target.value)
  }

   const handleDelete = async (itemId) => {
    try {
      if (username === decode.username) {
      // Perform the delete operation on the API endpoint
      const response = await fetch(`http://localhost:5002/api/admins/${itemId}`, {
        method: 'DELETE',
      });
      if (response.status === 200) {
        // If the DELETE request was successful, update the data state by removing the deleted employee
        setData(prevData => prevData.filter(item => item._id !== itemId));
      } else {
        setError('Error deleting employee');
      }
    } else {
      alert('Wrong Username');
    }
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};

  return (
    <>
    <div>
      <Navbar />
       <div className='major'>
          <h1 className='h2text' >COMPANY ADMINS</h1>
          <div className=' container mainContainer'>
              {data.map((employee)=>{
                return (
                <div className='card2 ' key={employee._id}>
                  <div className="employee-details">
                    <h2> <span className='wordHeading'>Full Name: </span> {`  ${employee.firstName} ${employee.lastName}`}</h2>
                    <p><span className='wordHeading'>Email:</span> {employee.email}</p>
                    <p><span className='wordHeading'>Username:</span>  {employee.username}</p>
                    </div>
                  {/* <button className='btn btn-primary cardButton' onClick={() => handleDelete(employee._id)}>Delete</button> */}
                  <button
            type="button"
            className="btn cardButton btn-primary "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setItemId(employee._id)} // Set the selected item ID
          >
            Delete
          </button>
          <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content  modalBodyYun">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Confirm Username
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p style={{ color: '#d4af37' }}>Re-Enter your username</p>
              <input type="text" onChange={handleUsername} className='modalInput' />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn modalBtn"  data-bs-dismiss="modal" onClick={handleDelete}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
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


