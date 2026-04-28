import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
// import "../style/Search.css"

export default function Search() {

  const location = useLocation()

  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])

  // GET QUERY FROM URL
  useEffect(() => {
    const q = new URLSearchParams(location.search).get("q")
    setQuery(q || "")
  }, [location.search])

  // FETCH PRODUCTS
  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    try {
      let res = await fetch("http://localhost:3000/AllProduct")
      let data = await res.json()
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  // FILTER PRODUCTS
  useEffect(() => {
    if (!query) return

    let result = products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )

    setFiltered(result)
  }, [query, products])

  // ADD TO CART
  async function addToCart(item) {
    await fetch("http://localhost:3000/History", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...item,
        time: new Date().toLocaleString()
      })
    })

    alert("Added to Cart")
  }

  return (
    <div className="search-container">

      <h2 className="search-title">
        Results for "{query}"
      </h2>

      <div className="product-grid">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div key={item.id} className="product-card">

              <img src={item.image} alt={item.name} />

              <h4>{item.name}</h4>

              <p className="price">₹{item.price}</p>
              <p className="rating">⭐ {item.rating}</p>

              <button onClick={() => addToCart(item)}>
                ADD
              </button>

            </div>
          ))
        ) : (
          <p className="no-data">No products found</p>
        )}
      </div>

    </div>
  )
}