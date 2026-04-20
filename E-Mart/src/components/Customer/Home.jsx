import React, { useContext } from 'react'
import '../../style/home.css'
import Footer from '../Footer'
import Carousal from '../Carouseal'

import  { AllProductCon } from '../../Context/Allproduct'

export default function Home() {

  let { products } = useContext(AllProductCon)

  console.log(products) 

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

  const groupedData = products?.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {}) || {}

  return (
    <>
      <Carousal />

      <div className="home">
        <h2 className="title">Groceries & Essentials</h2>

        {products.length > 0 ? (
          Object.entries(groupedData).map(([category, items]) => (
            <div key={category}>
              <h3>{category}</h3>

              <div className="card-container">
                {items.map((el) => (
                  <div className="card" key={el.id}>
                    <img src={el.image} alt={el.name} />
                    <h4>{el.name}</h4>
                    <p className="rating">⭐ {el.rating}</p>
                    <p className="price">₹{el.price}</p>

                    <button onClick={() => addToHistory(el)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <Footer />
    </>
  )
}