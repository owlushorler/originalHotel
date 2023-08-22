import React, { useState, useEffect } from 'react';
import result from "./data.json"
import "./viewRooms.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import bin from "../../../imagesfolder/icons8-bin-50.png"
import Navbar from '../Primary Page/navbar';
import jwt from "jwt-decode"
import Cookies from 'js-cookie'



function ViewRooms() {
  const token = Cookies.get('jwt');
  const decode = jwt(token)

  const [data, setData] = useState([]);
  const [username, setUsername] = useState('')
  const [itemId, setItemId] = useState(null)
  const [error, setError]= useState('')
  const [passwordError, setPasswordError] = useState('')

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5002/api/rooms'); // Replace with your API endpoint
      console.log(response)
      const jsonData = await response.json();
      setData(jsonData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
// const real = axios.get('https://localhost:5002/api/rooms')

// console.log(data)
  }
  useEffect(() => {
    // Function to fetch data from the API endpoint
    fetchData()
    // setData(result)
  }, []);

  const handleUsername =(e)=>{
    setUsername(e.target.value)
  }


  const handleDelete = async () => {
    try {
      if (username === decode.username) {
      // Perform the delete operation on the API endpoint
     const response =  await fetch(`http://localhost:5002/api/rooms/${itemId}`, {
        method: 'DELETE',
      });
      if (response.status === 200) {
        // If the DELETE request was successful, update the data state by removing the deleted employee
        setData(prevData => prevData.filter(item => item._id !== itemId));
      } else {
        setError('Error deleting room');
      }

    } else {
      setPasswordError('Wrong Password');
    }
  } catch (error) {
    console.error('Error deleting item:', error);
  }

  
}

  return (
    <>
      <div className='yunContainer'>
      <Navbar className="myNav"/>
    {data ? (
      <div className='yunContain'>
      {data.map((item) => (
        <div className="roomCard" key={item._id}>
          <img src={item.images} className='roomImage' alt='room image'/>
          <div className='roomText'>
          <h4>Name: {item.name}</h4>
          <p>ID: {item.roomID}</p>
          <p>Features: {item.features}</p>
          <div className='flexable'>
          <p>Price: {item.price}</p>
            {/* <img src={bin} className='yunBin' onClick={() => handleDelete(item._id)} /> */}
            <p>Capacity: {item.capacity}</p>
            </div>
            <div className='flexable1'>
            <p>Availability: {item.availability.toString()}</p>

          <button
            type="button"
            className="btn cardButton btn-primary "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setItemId(item._id)} // Set the selected item ID
          >
            Delete
          </button>
          </div>
          </div>
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
      ))}
      </div>) : (<div className="empty">There is no data to display</div>)}
      <button className='addEmployeeBtn'><Link style={{textDecoration: "none", color: "#fff"}} to="/addRoom">Add Rooms</Link></button>
    </div>
    </>
  );
}

export default ViewRooms;
