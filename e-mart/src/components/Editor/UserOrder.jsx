import React, { useEffect, useState } from 'react'

export default function UserOrder() {

  let [orders, setOrders] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    getOrders()
  }, [])

  async function getOrders() {
    try {
      let res = await fetch("http://localhost:3000/Orders")
      let data = await res.json()

      setOrders(data)
      setLoading(false)
    } catch (error) {
      console.log("Error fetching orders:", error)
      setLoading(false)
    }
  }

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading Orders...</h2>
  }

  let totalAmount = orders.reduce((sum, item) => {
    return sum + Number(item.price || 0)
  }, 0)

  return (
    <div style={{ padding: "20px" }}>

      <h2 style={{ textAlign: "center" }}>Orders Summary</h2>

     
      <h3 style={{ textAlign: "center", color: "green" }}>
        Total Orders: {orders.length}
      </h3>

    
      <h3 style={{ textAlign: "center", color: "blue" }}>
        Total Amount: ₹{totalAmount}
      </h3>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center"
      }}>

        {orders.map((item, index) => (
          <div key={index} style={{
            width: "260px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}>

            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />

            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Time: {item.time}</p>

            <p style={{
              color: item.status === "Placed" ? "orange" : "green",
              fontWeight: "bold"
            }}>
              Status: {item.status}
            </p>

          </div>
        ))}

      </div>
    </div>
  )
}