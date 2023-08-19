import React, { useState, useEffect } from 'react';
import result from "./data.json"
import "./viewRooms.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import bin from "../../../imagesfolder/icons8-bin-50.png"


function ViewRooms() {
  const [data, setData] = useState([]);

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


  const handleDelete = async (itemId) => {
    try {
      // Perform the delete operation on the API endpoint
      await fetch(`http://localhost:5002/api/rooms/${itemId}`, {
        method: 'DELETE',
      });

      // Update the state to remove the deleted item
      setData(prevData => prevData.filter(item => item._id !== itemId));
  
  } catch(error){
    console.error(error)
  }
}

  return (
    <div className='yunContainer'>
      <div className='yunContain'>
      {data.map((item) => (
        <div className="roomCard" key={item._id}>
          <img src={item.images} className='roomImage' alt='room image'/>
          <div className='roomText'>
          <h4>Name: {item.name}</h4>
          <p>Features: {item.features}</p>
            <img src={bin} className='yunBin' onClick={() => handleDelete(item._id)} />
            <p>Capacity: {item.capacity}</p>
            <p>Availability: {item.availability.toString()}</p>
          </div>

        </div>
      ))}
    </div>
      <button className='addEmployeeBtn'><Link style={{textDecoration: "none", color: "#fff"}} to="/addRoom">Add Rooms</Link></button>
    </div>
  );
}

export default ViewRooms;
