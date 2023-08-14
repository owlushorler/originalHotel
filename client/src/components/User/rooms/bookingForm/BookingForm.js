import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bookingForm.css";
import Nav2 from "../../home/nav2/nav2";

function BookingForm() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("")
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const rentPerDay = 220;
  // const [adults, setAdults] = useState(1);
  // const [children, setChildren] = useState(0);

  const totalDays = (() => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDifference = checkOut.getTime() - checkIn.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  })();

  const totalAmount = rentPerDay * totalDays;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bookingData = {
      fullName,
      email,
      checkInDate,
      checkOutDate,
      totalDays,
      rentPerDay,
      totalAmount,
    };

    try {
      const response = await fetch(" http://localhost:5010/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        console.log("Booking successfully submitted!");

        navigate.push("/confirmation");
      } else {
        console.error("Booking submission failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div>
      <Nav2/>
    <div className="main-container">
      <div className="mini-container">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <div>
            <label>
              Check-In Date:
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </label>
            <br />
            <label>
              Check-Out Date:
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </label>
          </div>

          <label>
            Rent Per Day:
            <span>${rentPerDay}</span>
          </label>
          <br />
          <h2 className="amount-heading">AMOUNT</h2>
          <p>Total Days: {totalDays}</p>
          <p>Rent Per Day: ${rentPerDay}</p>
          <p>Total Amount: ${totalAmount}</p>
          <button type="submit" className="pay-now-button">
            Pay Now
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default BookingForm;
