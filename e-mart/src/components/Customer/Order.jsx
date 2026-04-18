import React, { useEffect, useState } from "react";
import '../../style/oder.css'

export default function Order() {
  let [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  async function getOrders() {
    try {
      let res = await fetch("http://localhost:3000/Orders");
      let data = await res.json();
      setOrders(data || []);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteOrder(id) {
    try {
      await fetch(`http://localhost:3000/Orders/${id}`, {
        method: "DELETE",
      });

      setOrders(orders.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  let totalPrice = orders.reduce((acc, item) => {
    return acc + (item.price || 0);
  }, 0);

  return (
    <div className="orders-page">

      <h2 className="orders-title">My Orders</h2>

      <h3 className="orders-total">Total Order Value: ₹{totalPrice}</h3>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        <div className="orders-grid">

          {orders.map((item) => (
            <div className="orders-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Status: {item.status}</p>
              <p>Time: {item.time}</p>

              <button
                className="delete-btn"
                onClick={() => deleteOrder(item.id)}
              >
                Cancel Order
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}