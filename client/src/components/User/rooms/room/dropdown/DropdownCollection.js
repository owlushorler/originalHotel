import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./dropdownCollection.css";

function DropdownCollection() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState("Deluxe Room");
  const [availabilityMessage, setAvailabilityMessage] = useState("");

  const handleCheckAvailability = async () => {
    if (checkInDate && checkOutDate) {
      try {
        const response = await fetchAvailabilityData(
          checkInDate,
          checkOutDate,
          adults,
          children,
          roomType
        );
        const availableRooms = response.availableRooms;

        if (availableRooms.length > 0) {
          setAvailabilityMessage(
            `Rooms are available from ${checkInDate} to ${checkOutDate} for ${adults} adults and ${children} children. Room type: ${roomType}. Total available rooms: ${availableRooms.length}`
          );
        } else {
          setAvailabilityMessage(
            "No rooms available for the selected dates and preferences."
          );
        }
      } catch (error) {
        console.error("Error fetching availability data:", error);
        setAvailabilityMessage(
          "An error occurred while fetching availability data."
        );
      }
    } else {
      setAvailabilityMessage(
        "Please select valid check-in and check-out dates."
      );
    }
  };

  const fetchAvailabilityData = async (
    checkIn,
    checkOut,
    adults,
    children,
    roomType
  ) => {
    const apiUrl = ` http://localhost:5010/api/check-availability?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&roomType=${roomType}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
  };
  return (
    <div className="dropdown-collection">
      <div className="drop-con">
        <div>
          <label htmlFor="checkIn">Check In:</label>
          <DatePicker
            id="checkIn"
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
          />
        </div>
        <div>
          <label htmlFor="checkOut">Check Out:</label>
          <DatePicker
            id="checkOut"
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
          />
        </div>
        <div>
          <label htmlFor="adults">Adults:</label>
          <select
            id="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div>
          <label htmlFor="children">Children:</label>
          <select
            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div>
          <label htmlFor="roomType">Room:</label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Family Room">Family Room</option>
            <option value="Couple Room">Couple Room</option>
            <option value="Single Room">Single Room</option>
          </select>
        </div>
        <button className="btn" onClick={handleCheckAvailability}>
          CHECK AVAILABILITY
        </button>
      </div>
      <div className="availability">{availabilityMessage}</div>{" "}
    </div>
  );
}

export default DropdownCollection;
