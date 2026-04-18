import React, { useState, useEffect } from 'react'

import'../../style/showcard.css'

export default function ShowCard() {

  let [data, setData] = useState(null)

  useEffect(() => {
    showTask()
  }, [])

  async function showTask() {
    let res = await fetch('http://localhost:3000/AllProduct')
    let result = await res.json()
    setData(result)
  }

  async function handleDelete(category, id) {
    let res = await fetch('http://localhost:3000/AllProduct')
    let allData = await res.json()

    allData[category] = allData[category].filter(item => item.id !== id)

    await fetch('http://localhost:3000/AllProduct', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(allData)
    })

    showTask()
  }

  async function handleUpdate(category, product) {
    let newName = prompt("Enter name", product.name)
    let newPrice = prompt("Enter price", product.price)

    if (!newName || !newPrice) return

    let res = await fetch('http://localhost:3000/AllProduct')
    let allData = await res.json()

    allData[category] = allData[category].map(item =>
      item.id === product.id
        ? { ...item, name: newName, price: Number(newPrice) }
        : item
    )

    await fetch('http://localhost:3000/AllProduct', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(allData)
    })

    showTask()
  }

  return (
<div className="page">

  <h2 className="title">Products</h2>

  {data && Object.entries(data).map(([category, items]) => (
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
                  onClick={() => handleUpdate(category, el)}
                >
                  Update
                </button>

                <button
                  className="deleteBtn"
                  onClick={() => handleDelete(category, el.id)}
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