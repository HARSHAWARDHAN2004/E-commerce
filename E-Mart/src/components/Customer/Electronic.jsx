import React, { useContext } from 'react'
import '../../style/home.css'

import { AllProductCon } from '../../Context/Allproduct'

export default function Electronic() {

  const { products } = useContext(AllProductCon)

  //  Filter only Electronics
  const electronicData = products.filter(
    item => item.category === "Electronics"
  )

  function handleAddToCart(el) {
    console.log("Added:", el)
  }

  return (
    <div className="home">

      <h2 className="title">Electronic Product</h2>

      {electronicData.length > 0 ? (
        <div className="card-container">

          {electronicData.map((el) => (
            <div className="card" key={el.id}>

              <img src={el.image} alt={el.name} />

              <h4>{el.name}</h4>

              <p className="rating">⭐ {el.rating}</p>

              <p className="price">₹{el.price}</p>

              <button onClick={() => handleAddToCart(el)}>
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