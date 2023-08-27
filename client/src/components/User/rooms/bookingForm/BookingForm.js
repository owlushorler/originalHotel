import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bookingForm.css";
import Nav2 from "../../home/nav2/nav2";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import image from "../../../imagesfolder/H-Control.png"
import axios from "axios"

function BookingForm(prop) {
  const {poor,pan,rooId}= prop
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const rentPerDay = 220;
  // const [adults, setAdults] = useState(1);
  // const [children, setChildren] = useState(0);

  const totalDays = checkInDate && checkOutDate ? (() => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDifference = checkOut.getTime() - checkIn.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  })() : 0;

  function poo(){
    const bookingData = {
      fullName,
      email,
      price:poor.price || poor,
      checkInDate:checkInDate,
      checkOutDate:checkOutDate,
      room:poor.name || pan.toString(),
      roomID:poor.roomID || rooId.toString(),
      totalDays,
      totalAmount,
     createdAt: Date()



     // fullName,
     // email,
      //checkInDate,
      //checkOutDate,
     // price:poor.price,
     // type:poor.name,
     // roomID:poor.roomID,
     // features:poor.features,
     // totalDays,
      
    };
      console.log(pan[0])
    axios.post("http://localhost:3000/api/viewpay",
      bookingData
    ).then(res=>console.log(res)).catch((e)=>console.log(e))
  }

  const totalAmount = totalDays ? rentPerDay * totalDays : 0;


  {/*const handleSubmit = async (event) => {
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
  };*/}

  const config = {
    public_key: 'FLWPUBK_TEST-bfb72dfee9838067b6534dde08c337f2-X',
    tx_ref: Date.now(),
    amount: totalAmount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      name: fullName
    },
    customizations: {
      title: 'H-Control',
      description: 'Payment for booking',
      logo: image,
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  

  return (
    <>
    
      {/*<Nav2 />*/}
      <button onClick={()=>{poo()}} >lap</button>
      <div className="booking-form ">
        <h2>Booking Form</h2>
        <form onClick={poo()} >
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
                min={today}
                onChange={(e) => setCheckInDate(e.target.value)}
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
              />
            </label>
          </div>

          <label>
            Rent Per Day:
            <span>${poor.price}</span>
          </label>
          <br />
          <h2 className="amount-heading">AMOUNT</h2>
          <p>Total Days: {totalDays}</p>
          <p>Rent Per Day: ${poor.price || poor}</p>
          <p>Total Amount: ${totalAmount}</p>
          <button type="submit" className="pay-now-button">
          <FlutterWaveButton {...fwConfig} />
          </button>
        </form>
      </div>
    </>
  );
}

export default BookingForm;
