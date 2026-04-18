import React, { useEffect, useState } from 'react'
import '../../style/history.css'

export default function History() {

  let [history, setHistory] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  async function getHistory() {
    try {
      let res = await fetch("http://localhost:3000/History")
      let data = await res.json()
      setHistory(data || [])
    } catch (error) {
      console.log(error)
    }
  }

  let totalPrice = history.reduce((acc, item) => {
    return acc + (item.price || 0)
  }, 0)

  async function deleteItem(id) {
    try {
      await fetch(`http://localhost:3000/History/${id}`, {
        method: "DELETE"
      })

      setHistory(history.filter(item => item.id !== id))

    } catch (error) {
      console.log(error)
    }
  }

  async function againItem(item) {
    try {
      await fetch("http://localhost:3000/History", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: Date.now(),
          name: item.name,
          price: item.price,
          image: item.image,
          time: new Date().toLocaleString()
        })
      })

      getHistory()

    } catch (error) {
      console.log(error)
    }
  }

 
  async function placeOrder(item) {
    try {
      await fetch("http://localhost:3000/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: Date.now(),
          name: item.name,
          price: item.price,
          image: item.image,
          time: new Date().toLocaleString(),
          status: "Placed"
        })
      })

      alert("Order Placed Successfully ")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id="history-page">

      <h2 className="history-title">History</h2>

      <h3 id="total-price">Total Price: ₹{totalPrice}</h3>

      {history.length === 0 ? (
        <p>No history found</p>
      ) : (
        <div className="history-grid">

          {history.map((item) => (
            <div className="history-card" key={item.id}>

              <p><b>Name:</b> {item.name}</p>
              <p><b>Price:</b> ₹{item.price}</p>

              <img src={item.image} alt={item.name} />

              <div className="btn-group">

                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>

                <button
                  className="again-btn"
                  onClick={() => againItem(item)}
                >
                  Again
                </button>

               
                <button
                  className="order-btn"
                  onClick={() => placeOrder(item)}
                >
                  Order
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  )
}