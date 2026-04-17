import React, { useState, useEffect } from 'react'
import '../../style/home.css'

export default function Home() {

  const [data, setdata] = useState({})

  useEffect(() => {
    async function showTask() {
      try {
        let product = await fetch('http://localhost:3000/AllProduct')
        let actualData = await product.json()
        setdata(actualData)
      } catch (error) {
        console.log("Fetch error:", error)
      }
    }

    showTask()
  }, [])

  return (
    <div className="home">

      <h2 className="title">Groceries & Essentials</h2>

      {data?.AllProduct &&
        Object.keys(data.AllProduct).map((category) => (
          <div key={category}>

            <h3>{category}</h3>

            <div className="card-container">

              {data.AllProduct[category].map((el) => (
                <div className="card" key={el.id}>

                  {/* Image */}
                  <img src={el.image} alt={el.name} />

                  {/* Name */}
                  <h4>{el.name}</h4>

                  {/* Price */}
                  <p className="price">₹{el.price}</p>

                  {/* Button */}
                  <button>Add</button>

                </div>
              ))}

            </div>

          </div>
        ))
      }

    </div>
  )
}