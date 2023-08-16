import React, { useState, useEffect } from 'react';
import result from "./data.json"
import "./viewRooms.css"

function ViewRooms() {
  const [data, setData] = useState([]);

  useEffect(() => {
    

    setData(result)
  }, []);


  const handleDelete = async (itemId) => {
   
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
