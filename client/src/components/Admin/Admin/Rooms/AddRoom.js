// import React, { useState } from "react";
import { useState, useEffect } from "react";
import axios from "axios"
// import "./addEmployee.css"
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
// import SuperAdmin from "../../Login/SuperAdmin";
// import Navbar from "../../Primary Page/navbar";


import "./addRoom.css";

function AddRooms() {
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [features, setFeatures] = useState([]);
  const [price, setPrice] = useState("");
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
  if(res.ok){
    // console.log(res)
    // setReply(res.data)
    // alert(reply)
    navigate('/rooms')
  } else {
    // setReply(res.data)
    navigate('/rooms')
  }
})
.catch(err=> console.log(err))


setRoomName("");
setRoomType("");
setCapacity("");
setFeatures([]);
setPrice("");
setSelectedImages("");

}
  return (
    <>
      <h2>Add New Room</h2>
      <div className="add-room-container">
        <form className="add-room-form" encType="multipart/form-data">
          <div className="form-group">
            <label>Room Name:</label>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label>Room Type:</label>
            <input
              type="text"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            />
          </div> */}
          <div className="form-group">
            <label>Capacity:</label>
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Room Features:</label>
            <fieldset className="checkbox-group">
              {[
                "WiFi",
                "TV",
                "Air Conditioning",
                "Mini Fridge",
                "Room Service",
                "Desk",
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
            />
          </div>
          <button className="newRoom-btn" type="button" onClick={handleAddRoom}>
            Add Room
          </button>
        </form>
      </div>
    </>
  );
}

export default AddRooms;
