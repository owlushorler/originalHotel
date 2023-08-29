
import React, { useState, useEffect } from "react";
 import "./booking.css";
import Navbar from "../Primary Page/navbar";
import { Link } from 'react-router-dom';

       
const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
      
    useEffect(() => {
    fetch("http://localhost:5002/api/bookings")
      .then((response) => response.json())
      .then((booking) => {
        console.log(booking[0]);
        setBooking(booking);
        setItemsPerPage(booking.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
       <>
         <div className="abu-reserve-parent">
          <Navbar />
        <h1 className="abu-reservation">VIEW BOOKINGS</h1>
        <table className="abu-tabularForm">

       <thead>
         <tr className="abu-tabular-head">
            <th>Room ID</th>
            <th>FullName</th>
              <th>Email</th>
            <th>Check In</th>
            <th>Check Out</th>
              <th>Room Name</th>
            <th>Total Days</th>
              <th>Price</th>
              <th>Total Amount</th>
         </tr>
       </thead>
        <tbody>
            {booking
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
                )
            .map((book) => (
                <tr key={book._id}>
                  <td>{book.roomId}</td>
                  <td>{book.fullName}</td>
                  <td>{book.email}</td>
                  <td>{book.checkInDate}</td>
                  <td>{book.checkOutDate}</td>
                  <td>{book.room}</td>
                  <td>{book.totalDays}</td>
                  <td>{book.price}</td>
                  <td>{book.totalAmount}</td>
                </tr>
              ))}
                   </tbody>
        </table>
  <div className="abu-pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
            <span>
            {currentPage} of {Math.ceil(booking.length / itemsPerPage)}
          </span>
            <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </div>
            <button className='addbookingBtn'><Link style={{textDecoration: "none", color: "#fff"}} to="/makeReservation">Make Reservation</Link></button>
            </div>

    </>
  );
};


export default Booking;

