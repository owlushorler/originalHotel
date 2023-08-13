import React, { useState, useEffect } from 'react';
import result from "./data.json"
import "./viewRooms.css"

function ViewRooms() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API endpoint
    // async function fetchData() {
    //   try {
    //     const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // }

    // fetchData();
    setData(result)
  }, []);


  const handleDelete = async (itemId) => {
    // try {
    //   // Perform the delete operation on the API endpoint
    //   await fetch(`https://api.example.com/data/${itemId}`, {
    //     method: 'DELETE',
    //   });

      // Update the state to remove the deleted item
      setData((prevData) => prevData.filter((item) => item.id !== itemId));
    //   setData(() => prevData.filter((item) => item.id !== itemId));
    // } catch (error) {
    //   console.error('Error deleting item:', error);
    // }
  };

  return (
    <div className='container1'>
      {data.map((item) => (
        <div className="roomCard" key={item.id}>
          {/* Render each element from the fetched data */}
            <h3>{item.type}</h3>
            <p>{item.features}</p>

            {/* Add a delete button for each element */}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ViewRooms;
