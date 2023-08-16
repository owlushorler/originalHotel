import React, { useState, useEffect } from 'react';
import result from "./data.json"
import "./viewRooms.css"

function ViewRooms() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API endpoint
    // async function fetchData() {
    //   try {
    //     const response = await fetch('https://localhost:5002/api/rooms'); // Replace with your API endpoint
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // }

    setData(result)
  }, []);


  const handleDelete = async (itemId) => {
    // try {
    //   // Perform the delete operation on the API endpoint
    //   await fetch(`'https://localhost:5002/api/rooms/${itemId}`, {
    //     method: 'DELETE',
    //   });

      // Update the state to remove the deleted item
      setData((prevData) => prevData.filter((item) => item.id !== itemId));
  
  };

  return (
    <div className='container1'>
      {data.map((item) => (
        <div className="roomCard" key={item.id}>
         
            <h3>{item.type}</h3>
            <p>{item.features}</p>

         
            <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ViewRooms;
