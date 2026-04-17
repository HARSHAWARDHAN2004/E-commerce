import React, { useState } from 'react'
import Navabar from './components/Navabar'
import AllRoutes from './components/AllRoutes'
import { Link } from 'react-router-dom'

import Home from './components/Customer/Home'
import Clothes from './components/Customer/Clothes'
import Electronic from './components/Customer/Electronic'
import Dailyneeds from './components/Customer/Dailyneeds'
import FruitandVeg from './components/Customer/FruitandVeg'
import Grains from './components/Customer/Grains'
import Login from './components/login'
import Admin from './components/Admin'
import Navbar from './components/Navabar'

export default function App() {

  let routesList = [
    {
      path: "/",
      title: "Home",
      element: <Home />
    },
    {
      path: "/clothes",
      title: "Clothes",
      element: <Clothes />
    },
    {
      path: "/electronics",
      title: "Electronics",
      element: <Electronic />
    },
    {
      path: "/daily",
      title: "Daily Needs",
      element: <Dailyneeds />
    },
    {
      path: "/fruits",
      title: "Fruits & Vegetables",
      element: <FruitandVeg />
    },
    {
      path: "/grains",
      title: "Grains",
      element: <Grains/>
    },
    {
      path: "admin",
      title: "Admin",
      element: <Admin/>
    },
     {
      path: "/login",
      title: "Login",
      element: <login/>
    },
    


      
  ]

 let [role, setRole]=useState(" ")


 return (
  <div>

    <div style={{ marginBottom: "20px" }}>
      <Link to="/login">
        <button style={{ padding: "10px", background: "green", color: "white" }}>
          User
        </button>
      </Link>

      <Link to="/admin">
        <button style={{ padding: "10px", background: "red", color: "white" }}>
          Admin
        </button>
      </Link>
    </div>

    {/* THIS IS REQUIRED */}
    <Navbar RouteData={routesList || []} />
    <AllRoutes RouteData={routesList} />

  </div>
)
}
