import React from 'react';
import { Link } from 'react-router-dom';
 import './booking.css';
 import './banner3.jpg';

 const bookin = [
    {
        roomType:"single",
        Features:["air coditional", "Wi-Fi", "TV"] ,
        Customer_Id:"C123", 
        Customer_Name:"Yungest Bullseye", 
         Amount:"N2000"
    },

    {
        roomType: 'Double',
        Customer_Id: 'C456',
        Customer_Name:"Emmanuel Bullseye", 
        Amount: 'N150,000',
        Features: ['Wi-Fi', 'TV', 'Balcony'],
      }
        
      
    // {
    //     Type:"couplen room",
    //     Feature:"air coditional, full size bed",
    //     Customer:"game", 
    //     Customer:"ball"
    // },
    // {
    //     Type:"couplen room",
    //     Feature:"air coditional, full size bed",
    //     Customer:"game", 
    //     Customer:"ball"
    // },
    // {
    //     Type:"couplen room",
    //     Feature:"air coditional, full size bed",
    //     Customer:"game", 
    //     Customer:"ball"
    // },
    // {
    //     Type:"couplen room",
    //     Feature:"air coditional, full size bed",
    //     Customer:"game", 
    //     Customer3:"ball"
    // },
    // {
    //     Type:"couplen room",
    //     Feature:"air coditional, full size bed",
    //     Customer:"game", 
    //     Customer3:"ball"
    // },
 ]


const Booking = () => {

  return (
       <>
       <div>
         <h1 className='Sh'>View Booking</h1>
        <table className='Stable'>
   
       <thead>
         <tr>
            <th>Room Type</th>
            <th>Features</th>
            <th>Customer_Id</th>
            <th>Customer_Name</th>
            <th>Amount</th>
         </tr>
       </thead>
        <tbody className='Sbody'>
            {bookin.map((book) => {
                return(
                     <tr key={book.id}>
                        <td>{book.roomType}</td>
                        <td>{book.Features}</td>
                        <td>{book.Customer_Id}</td>
                        <td>{book.Customer_Name}</td>
                        <td>{book.Amount}</td>
                         </tr>
                )
            })}
           
        </tbody>
        </table>
  

    {/* <div className='sbook'>
         
        {bookin.map((ele)=>{
            return(
            <div className='Sinner'>
            <p> Type:{ele.Type} </p>
            <p>Feature:{ele.Feature}</p>
            <p>Customer_id:{ele.Customer} </p>
            <p>Customer:{ele.Customer}</p>
        
            </div>
            )
        })}
       
       </div> */}
       {/* <button className='addEmployeeBtn'><Link style={{textDecoration: "none", color: "#fff"}} to="/reserveRoom">Reserve Room</Link></button> */}
       </div>
    </>
  )
  
};

export default Booking
