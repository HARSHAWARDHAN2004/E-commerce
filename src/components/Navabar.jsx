import React from 'react'
import { Link } from 'react-router-dom'
import '../style/navabar.css'

export default function Navbar({ RouteData }) {
  return (
    <>
      {/* Top Navbar */}
      <div className="top-nav">

        {/* Logo */}
        <div className="logo">E-Mart</div>

        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search in E-Mart" />
          <button>Search</button>
        </div>

        {/* Right */}
        <div className="right-nav">
          <Link to="/login">Login</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>

      </div>

      {/* Bottom Navbar */}
      <div className="bottom-nav">
        {RouteData.map((el, i) => (
          <Link key={i} to={el.path}>
            {el.title}
          </Link>
        ))}
      </div>
    </>
  )
}