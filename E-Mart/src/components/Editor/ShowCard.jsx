import React, { useState, useEffect } from 'react'
import '../../style/showcard.css'

export default function ShowCard() {

  let [data, setData] = useState([])

  useEffect(() => {
    showTask()
  }, [])

  async function showTask() {
    let res = await fetch('http://localhost:3000/AllProduct')
    let result = await res.json()
    setData(result) // array
  }

  // ✅ GROUP BY CATEGORY
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {})

  async function handleDelete(id) {
    await fetch(`http://localhost:3000/AllProduct/${id}`, {
      method: 'DELETE'
    })
    showTask()
  }

  async function handleUpdate(product) {
    let newName = prompt("Enter name", product.name)
    let newPrice = prompt("Enter price", product.price)

    if (!newName || !newPrice) return

    await fetch(`http://localhost:3000/AllProduct/${product.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newName,
        price: Number(newPrice)
      })
    })

    showTask()
  }

  return (
    <div className="page">

      <h2 className="title">Products</h2>

      {Object.entries(groupedData).map(([category, items]) => (

        <div key={category} className="category">

          <h3 className="category-title">{category}</h3>

          <div className="grid">

            {items.map(el => (
              <div key={el.id} className="card">

                <div className="imgBox">
                  <img src={el.image} alt={el.name} />
                </div>

                <div className="content">

                  <h4>{el.name}</h4>
                  <p className="price">₹{el.price}</p>

                  <div className="btnRow">

                    <button
                      className="updateBtn"
                      onClick={() => handleUpdate(el)}
                    >
                      Update
                    </button>

                    <button
                      className="deleteBtn"
                      onClick={() => handleDelete(el.id)}
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      ))}

    </div>
  )
}