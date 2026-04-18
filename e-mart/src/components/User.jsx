import React, { useContext } from 'react'
import Navbar from './Navabar'
import AllRoutes from './AllRoutes'

import Home from './Customer/Home'
import Clothes from './Customer/Clothes'
import Electronic from './Customer/Electronic'
import FruitandVeg from './Customer/FruitandVeg'
import Grains from './Customer/Grains'
import Dailyneeds from './Customer/Dailyneeds'
import Admin from './Admin'
import History from './Customer/History'

import { TemplatesCon } from '../Context/Templates'
import Login from './Login'
import Order from './Customer/Order'

export default function User() {

  let { value } = useContext(TemplatesCon)

   let user = JSON.parse(localStorage.getItem("User"));

  

  let routesList = [
    { path: "/", title: "Home", element: <Home /> },
    { path: "/clothes", title: "Clothes", element: <Clothes /> },
    { path: "/electronics", title: "Electronics", element: <Electronic /> },
    { path: "/daily", title: "Daily Needs", element: <Dailyneeds /> },
    { path: "/fruits", title: "Fruits & Vegetables", element: <FruitandVeg /> },
    { path: "/grains", title: "Grains", element: <Grains /> },
    { path: "/history", title: "Go_To_Cart", element: <History/> },
    { path: "/order", title: "Order", element: <Order/> },
   
  ]

  return (
    <div
      style={{
        backgroundColor: value ? "black" : "white",
        color: value ? "black" : "black"
      }}
    >
      
      {!user ? (
  <Login />
) : (
  <>
    <Navbar RouteData={routesList} />
    <AllRoutes RouteData={routesList} />
  </>
)}
    </div>
  )
}