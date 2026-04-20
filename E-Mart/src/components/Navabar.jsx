import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/navabar.css'

import { TemplatesCon } from "../Context/Templates"
import { AuthicationCon } from "../Context/Authication"

export default function Navbar({ RouteData }) {

  let { value, changetheme } = useContext(TemplatesCon)
  let { isAuth, setAuth } = useContext(AuthicationCon)

  let themeText = value ? "Light Mode" : "Dark Mode"
  let authText = isAuth ? "Logout" : "Login"

  let [cartCount, setCartCount] = useState(0)

  let [search, setSearch] = useState("")
  let navigate = useNavigate()

  useEffect(() => {
    getCart()

    let interval = setInterval(() => {
      getCart()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  async function getCart() {
    try {
      let res = await fetch("http://localhost:3000/History")
      let data = await res.json()

      setCartCount(Array.isArray(data) ? data.length : 0)
    } catch (error) {
      console.log("Cart fetch error:", error)
      setCartCount(0)
    }
  }

  function handleSearch() {
    if (search.trim()) {
      navigate(`/search?q=${search}`)
    }
  }

  return (
    <>
      <div className="top-nav">

        <div className="logo">E-Mart</div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search in E-Mart"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch()
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="right-nav">

          <button
            onClick={() => changetheme(!value)}
            style={{
              padding: "10px 16px",
              marginRight: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              backgroundColor: value ? "#ffcc00" : "#333",
              color: value ? "#000" : "#fff",
              fontWeight: "bold",
              transition: "0.3s"
            }}
          >
            {themeText}
          </button>

          <button
            onClick={() => setAuth(prev => !prev)}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              backgroundColor: authText === "Login" ? "#28a745" : "#dc3545",
              color: "white",
              fontWeight: "bold",
              transition: "0.3s"
            }}
          >
            {authText}
          </button>

          <Link to="/history">🛒 Cart ({cartCount})</Link>

        </div>
      </div>

      <div className="bottom-nav">
        {(RouteData || []).map((el, i) => (
          <Link key={i} to={el.path}>
            {el.title}
          </Link>
        ))}
      </div>
    </>
  )
}