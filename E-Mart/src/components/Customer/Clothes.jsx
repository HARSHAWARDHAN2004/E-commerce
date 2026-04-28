import React, { useContext } from 'react'
import '../../style/home.css'

import { AllProductCon } from '../../Context/Allproduct'

export default function Clothes() {

  let { products } = useContext(AllProductCon)

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

 
  let clothesData = products.filter(
    (item) => item.category === "Clothes"
  )

  return (
    <div className="home">

      <h2 className="title">Clothes</h2>

      {clothesData.length > 0 ? (
        <div className="card-container">

          {clothesData.map((el) => (
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