import React from 'react';
 import './booking.css';
 import './banner3.jpg';

 const bookin = [
    {
        Type:"couplen room",
        Feature:"air coditional, full size bed",
        Customer:"game", 
        Customer:"ball"
    },
    {
        Type:"couplen room",
        Feature:"air coditional, full size bed",
        Customer:"game", 
        Customer:"ball"
    },
    {
        Type:"couplen room",
        Feature:"air coditional, full size bed",
        Customer:"game", 
        Customer:"ball"
    },
    {
        Type:"couplen room",
        Feature:"air coditional, full size bed",
        Customer:"game", 
        Customer:"ball"
    },
    {
        Type:"couplen room",
        Feature:"air coditional, full size bed",
        Customer:"game", 
        Customer3:"ball"
    },
    {
        Type:"couplen room",
        Feature:"air coditional, full size bed",
        Customer:"game", 
        Customer3:"ball"
    },
 ]


const booking = () => {

  return (
       <>
    <h1 className='sh'>View Booking</h1>

    <div className='sbook'>
         
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
       
       </div>
    </>
  )
  
}

export default booking
