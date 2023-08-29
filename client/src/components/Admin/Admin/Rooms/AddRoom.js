// import React, { useState } from "react";
import { useState, useEffect } from "react";
import axios from "axios"
// import "./addEmployee.css"
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
// import SuperAdmin from "../../Login/SuperAdmin";
// import Navbar from "../../Primary Page/navbar";


import "./addRoom.css";
import Navbar from "../Primary Page/navbar";

function AddRooms() {
  const [roomName, setRoomName] = useState("");
  const [roomID, setRoomID] = useState("");
  const [capacity, setCapacity] = useState("");
  const [features, setFeatures] = useState([]);
  const [price, setPrice] = useState("");
  const [reply, setReply] = useState("")
  const [selectedImages, setSelectedImages] = useState('');
  const navigate = useNavigate();
    

  const handleImageUpload = (e) => {
    setSelectedImages(e.target.files[0]);
    // if (files) {
    //   const imagesArray = Array.from(files).slice(0, 6);
    //   setSelectedImages(imagesArray);
    // }

  };

  const handleFeatureChange = (feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter((item) => item !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };
  console.log(features);

  const handleAddRoom = async (event) => {
    if (
      roomID === "" ||
      roomName === "" ||
      capacity <= 0 
      // selectedImages.length === 0
      ) {
        console.error("Please fill in all fields and provide at least one image");
        return;
      }
      
      event.preventDefault()
    // const newRoom = {
    //   roomName,
    //   roomType,
    //   capacity,
    //   features,
    //   price,
    //   selectedImages,
    // };

    const formData = new FormData()
        formData.append("name", roomName)
        formData.append("capacity", capacity)
        formData.append("roomID", roomID)
        formData.append("features", features)
        formData.append("price", price)
        formData.append("file", selectedImages)

// console.log(formData.get("name"))
// console.log(formData.get("file"))
    // try {
    //   const response = await fetch("http://localhost:5002/api/rooms", {
    //     method: "POST",
    //     withCredentials: 'include',
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //     // body: formData
    //   });

    //   if (response.ok) {
    //     console.log("Room added successfully");

//   } else {
//     console.error("Failed to add room");
//   }
// } catch (error) {
//   console.error("Error:", error);
// }
// };

axios.post("http://localhost:5002/api/rooms", formData)
.then((res)=> {
  if(res.status === 201){
    console.log(res.data)
    setReply(res.data)
    console.log(reply)
    alert(res.data)
    navigate('/rooms')
  } else {
    setReply(res.data)
    alert(reply)

  }
})
.catch(err=> console.log(err))


setRoomName("");
setRoomID("");
setCapacity("");
setFeatures([]);
setPrice("");
setSelectedImages("");

}
  return (
    <>
    <Navbar />
    <div className='major'>
      <h1 className='addroomh2'>Add New Room</h1>
      <div className="add-room-container">
        <form className="add-room-form" encType="multipart/form-data">
            <div className="form-group">
              <label>Room ID:</label>
              <input
                type="text"
                value={roomID}
                onChange={(e) => setRoomID(e.target.value)}
              />
            </div>
            <div className="depart1">
          <div className="form-group">
            <label>Room Name:</label>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Capacity:</label>
            <input
              type="number"
              value={capacity}
              min="2"
              max="4"
              placeholder="2"
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
          </div>
          <div className="form-group">
            <label>Room Features:</label>
            <fieldset className="checkbox-group">
              {[
                "WiFi",
                "TV",
                "Mini Fridge",
                "Desk",
                "Air Conditioning",
                "Room Service",
                "Special Requests",
              ].map((feature) => (
                <label key={feature}>
                  <input
                    type="checkbox"
                    value={feature}
                    checked={features.includes(feature)}
                    onChange={() => handleFeatureChange(feature)}
                  />
                  {feature}
                </label>
              ))}
            </fieldset>
          </div>
          <div className="form-group">
            <label>Room Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label>Room Images:</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
            <ul className="image-list">
              {selectedImages.map((image, index) => (
                <li key={index}>{image.name}</li>
              ))}
            </ul>
          </div> */}

          <div className="form-group">
            <label>Room Images:</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="imageInput"
            />
          </div>
          <button className="newRoom-btn" type="button" onClick={handleAddRoom}>
            Add Room
          </button>
        </form>
        {reply && (<p>{reply}</p>)}
      </div>
      </div>
    </>
  );
}

export default AddRooms;
