import React, { useContext } from 'react'
import '../../style/home.css'
import Footer from '../Footer'
import Carousal from '../Carouseal'

import { AllProductCon } from '../../Context/Allproduct'

export default function Home() {

  const { products } = useContext(AllProductCon)

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
          quantity: 1,
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
            <div key={category} className="category-section">

              <h3 className="category-title">{category}</h3>

              <div className="card-container">
                {items.map((el) => (
                  <div className="card" key={el.id}>

                    <div className="card-img">
                      <img src={el.image} alt={el.name} />
                      {el.discount && (
                        <span className="badge">{el.discount}% OFF</span>
                      )}
                    </div>

                    <div className="card-body">
                      <h4 className="product-name">{el.name}</h4>

                      <p className="brand">{el.brand}</p>

                      <div className="rating">
                        ⭐ {el.rating} <span>(120 reviews)</span>
                      </div>

                      <div className="price-section">
                        <span className="price">₹{el.price}</span>

                        {el.discount && (
                          <span className="old-price">
                            ₹{Math.floor(el.price + (el.price * el.discount) / 100)}
                          </span>
                        )}
                      </div>

                      <p className="delivery">{el.delivery}</p>

                      <button
                        className="add-btn"
                        onClick={() => addToHistory(el)}
                      >
                        Add to Cart
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>

      <Footer />
    </>
  )
}