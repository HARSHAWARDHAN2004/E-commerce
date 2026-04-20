import React, { useEffect, useState } from 'react'
import '../../style/userhistory.css'

export default function UserHistory() {

  let [history, setHistory] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    getHistory()
  }, [])

  async function getHistory() {
    try {
      let res = await fetch("http://localhost:3000/History")
      let data = await res.json()
      setHistory(data)
      setLoading(false)
    } catch (error) {
      console.log("Error fetching history:", error)
      setLoading(false)
    }
  }

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading Order History...</h2>
  }

  return (
    <div className="history-container">
      <h2 className="history-title">User History</h2>

      {history.length === 0 ? (
        <p style={{ textAlign: "center" }}>No orders found</p>
      ) : (
        <div className="history-list">
          {history.map((item, index) => (
            <div className="history-card" key={index}>
              
              <img src={item.image} alt={item.name} />

              <div className="history-details">
                <h4>User: {item.username}</h4>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Category: {item.category}</p>
                <p>Status: {item.status ? "Delivered" : "Pending"}</p>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  )
}