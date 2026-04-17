import React from 'react'
import { Link } from 'react-router-dom'
import '../style/navabar.css'

export default function Navbar({ RouteData }) {
  return (
    <>
     
      <div className="top-nav">

       
        <div className="logo">E-Mart</div>

       
        <div className="search-box">
          <input type="text" placeholder="Search in E-Mart" />
          <button>Search</button>
        </div>

       
        <div className="right-nav">
          <Link to="/login">Login</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>

      </div>

     
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