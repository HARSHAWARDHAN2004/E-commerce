import React, { useContext } from 'react'
import '../../style/home.css'

import { AllProductCon } from '../../Context/Allproduct'

export default function Grains() {

  const { products } = useContext(AllProductCon)


  const grainsData = products.filter(item => item.category === "Grains")

  async function addToHistory(product) {
    try {
      await fetch("http://localhost:3000/History", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: Date.now(),
          name: product.name,
          price: product.price,
          image: product.image,
          time: new Date().toLocaleString()
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="home">

      <h2 className="title">Grains</h2>

      {grainsData.length > 0 ? (
        <div className="card-container">

          {grainsData.map((el) => (
            <div className="card" key={el.id}>

              <img src={el.image} alt={el.name} />

              <h4>{el.name}</h4>

              <p className="rating">⭐ {el.rating}</p>

              <p className="price">₹{el.price}</p>

              <button onClick={() => addToHistory(el)}>
                Add
              </button>

            </div>
          ))}

        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}