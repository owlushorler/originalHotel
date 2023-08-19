
import React, { useState } from 'react';
import './cart.css';

const Cart = () => {
  const [cartRooms, setCartRoom] = useState([]);
  const [availableRoom] = useState([
    { id: 1, name: 'Room 1', price: 1000, imageSrc: 'path/to/room1.jpg', quantity: 1 },
    { id: 2, name: 'Room 2', price: 1500, imageSrc: 'path/to/room2.jpg', quantity: 1 },
    // Add more items here
  ]);

  const addToCart = (room) => {
    const existingRoom = cartRooms.find(item => item.id === room.id);
    if (existingRoom) {
      const updatedCart = cartRooms.map(item =>
        item.id === room.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartRoom(updatedCart);
    } else {
      setCartRoom([...cartRooms, { ...room, quantity: 1 }]);
    }
  };

  const removeFromCart = (roomToRemove) => {
    const updatedCart = cartRooms.filter(item => item.id !== roomToRemove.id);
    setCartRoom(updatedCart);
  };

  const decreaseQuantity = (room) => {
    if (room.quantity > 1) {
      const updatedCart = cartRooms.map(item =>
        item.id === room.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartRoom(updatedCart);
    }
  };

  const calculateSubtotal = (room) => {
    return (room.price * room.quantity).toFixed(2);
  };

  const calculateGroundTotal = () => {
    const totalPrice = cartRooms.reduce((total, room) => total + (room.price * room.quantity), 0);
    return totalPrice.toFixed(2);
  };

  const handlePayNow = () => {
    // Payment logic here
    alert('Proceeding to payment...');
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h2 className="cart-title">Booking Cart</h2>
        <table className="room-table">
          <thead>
            <tr>
              <th>Room</th>
              
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {availableRoom.map(Rooms => (
              <tr key={Rooms.id}>
                <td>
                  <img src={Rooms.imageSrc} alt={Rooms.name} />
                  {Rooms.name}
                </td>
                <td>${Rooms.price}</td>
                <td>
                  <button onClick={() => decreaseQuantity(Rooms)}>-</button>
                  {/* {Rooms.quantity} */}
                  <button onClick={() => addToCart(Rooms)}>+</button>
                </td>
                <td>${calculateSubtotal(Rooms)}</td>
                <td>
                  <button onClick={() => removeFromCart(Rooms)}>REMOVE</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tbody>
          {cartRooms.map(Rooms => (
            <tr key={Rooms.id}>
              <td>
                <img src={Rooms.imageSrc} alt={Rooms.name} />
                {Rooms.name}
              </td>
              <td>${Rooms.price}</td>
              <td>
                <button onClick={() => decreaseQuantity(Rooms)}>-</button>
                {Rooms.quantity}
                <button onClick={() => addToCart(Rooms)}>+</button>
              </td>
              <td>${calculateSubtotal(Rooms)}</td>
              <td>
                <button onClick={() => removeFromCart(Rooms)}>REMOVE</button>
              </td>
            </tr>
          ))}
        </tbody>

        </table>
            </div>
            <div className="cart-total">
              <p className="text">Ground Total: ${calculateGroundTotal()}</p>
            </div>
            <button className="pay-button" onClick={handlePayNow}>
              Pay Now
            </button>
    </div>
  );
};

export default Cart;
