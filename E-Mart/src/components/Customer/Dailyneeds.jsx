import React, { useContext } from 'react'
import '../../style/home.css'

import { AllProductCon } from '../../Context/Allproduct'

export default function Dailyneeds() {

  const { products } = useContext(AllProductCon)

  //  Filter only Daily Needs
  const dailyData = products.filter(
    item => item.category === "DailyNeeds"
  )

  function handleAddToCart(el) {
    console.log("Added:", el)
  }

  return (
    <div className="home">

      <h2 className="title">Daily Needs</h2>

      {dailyData.length > 0 ? (
        <div className="card-container">

          {dailyData.map((el) => (
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