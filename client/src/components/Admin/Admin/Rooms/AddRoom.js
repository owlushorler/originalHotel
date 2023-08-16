import React, { useState } from "react";
import "./addRoom.css";

function AddRooms() {
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [features, setFeatures] = useState([]);
  const [price, setPrice] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files) {
      const imagesArray = Array.from(files).slice(0, 6);
      setSelectedImages(imagesArray);
    }
  };

  const handleFeatureChange = (feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter((item) => item !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };
  console.log(features);

  const handleAddRoom = async () => {
    if (
      roomName === "" ||
      roomType === "" ||
      capacity <= 0 ||
      selectedImages.length === 0
    ) {
      console.error("Please fill in all fields and provide at least one image");
      return;
    }

    const newRoom = {
      roomName,
      roomType,
      capacity,
      features,
      price,
      selectedImages: selectedImages.map((image) => image.name),
    };

    try {
      const response = await fetch("/api/addRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoom),
      });

      if (response.ok) {
        console.log("Room added successfully");

        setRoomName("");
        setRoomType("");
        setCapacity("");
        setFeatures([]);
        setPrice("");
        setSelectedImages([]);
      } else {
        console.error("Failed to add room");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h2>Add New Room</h2>
      <div className="add-room-container">
        <form className="add-room-form">
          <div className="form-group">
            <label>Room Name:</label>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Room Type:</label>
            <input
              type="text"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            />
          </div>
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
          <div className="form-group">
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
