import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./addReservation.css";
import axios from 'axios'


function Reservations() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [fullName, setFullName] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState('')
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomData, setRoomData] = useState('')
  const [price, setPrice] = useState()
  const [roomId, setRoomId] = useState("")
  // const [adults, setAdults] = useState(1);
  // const [children, setChildren] = useState(0);
//   const rentPerDay = {room.price};
  var totalDays = checkInDate && checkOutDate ? (() => {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const timeDifference = checkOut.getTime() - checkIn.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
      return daysDifference;
    })() : 0;
    
    
    const handleRoomInput = (e)=>{
        setRoom(e.target.value);
    }

    const fetchData= async ()=>{
        try {
            const response = await axios.get(`http://localhost:5002/api/roomss/${room}`)
            if(response.status === 200){
                setRoomData(response.data)
                // console.log(roomData)
                // console.log(response.data.price)
                setPrice(response.data.price)
                setRoomId(response.data.roomID)

            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log(error.response.data)
                setError(error.response.data); // Assuming the error message is in the response data
            } else {
                setError("An error occurred. Please try again later."); // Generic error message for other errors
            }
            
        }
        
    }
    useEffect(()=>{
        fetchData()
    }, [room])
    
    const totalAmount = totalDays ? (price * totalDays) : 0;
    // console.log(totalDays * )
    // console.log(totalAmount)
    console.log(room)


  const handleSubmit = async (event) => {
    event.preventDefault();

    const bookingData = {
      fullName,
      email,
      checkInDate,
      checkOutDate,
      room,
      totalDays,
      price,
      totalAmount,
      roomId
    };

    try {
      const response = await fetch("http://localhost:5002/api/checked", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        console.log("Booking successfully submitted!");

        navigate.push("/getBookings");
      } else {
        console.error("Booking submission failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <>
      <div className="major2">
        <h1>MAKE RESERVATION</h1>
        <form  className="reservation" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="employeeInput"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="employeeInput"
            />
          </label>
          <br />
          <div className="checkOutFlex">
            <label>
              Check-In Date:
              <input
                type="date"
                value={checkInDate}
                min={today}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="checkOutInput"
              />
            </label>
            <br />
            <label>
              Check-Out Date:
              <input
                type="date"
                value={checkOutDate}
                min={checkInDate || today}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="checkOutInput"
              />
            </label>
          </div>
          
          {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#"></a></li>
    <li><a class="dropdown-item" href="#">Single</li>
  </ul>
</div> */}
<select className="checkDropDown" value={room} onChange={handleRoomInput}>
    <option  value= "">Select a Room</option>
    <option value="Deluxe Room">Deluxe Room</option>
    <option value="Family Room">Family Room</option>
    <option value="Couples Room">Couples Room</option>
    <option value="Single Room">Single Room</option>
</select>


          <label className="majorLabel">
            Rent Per Day: {price}
            {/* <span>${price}</span> */}
          </label>
          <br />
          <h3>Room ID: {roomId}</h3>
          <h2 className="amount-heading">AMOUNT</h2>
          <p>Total Days: {totalDays}</p>
          {/* <p>Rent Per Day: ${price}</p> */}
          <p>Total Amount: N{totalAmount}</p>
          <button type="submit" className="reserveBtn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Reservations;
