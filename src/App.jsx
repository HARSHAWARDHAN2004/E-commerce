import React from 'react'
import Navabar from './components/Navabar'
import AllRoutes from './components/AllRoutes'
import Home from './components/Customer/Home'
import Clothes from './components/Customer/Clothes'
import Electronic from './components/Customer/Electronic'
import Dailyneeds from './components/Customer/Dailyneeds'
import FruitandVeg from './components/Customer/FruitandVeg'
import Grains from './components/Customer/Grains'

export default function App() {

  let Routes = [
    {
      path: "/",
      title: "Home",
      element: <Home/>
    },
     {
      path: "/clothes",
      title: "Clothes",
      element: <Clothes/>
    },
    {
      path: "/electronics",
      title: "Electronics",
      element: <Electronic/>
    },
    {
      path: "/daily",
      title: "Daily Needs",
      element: <Dailyneeds/>
    },
    {
      path: "/fruits",
      title: "Fruits & Vegetables",
      element: <FruitandVeg/>
    },
    {
      path: "/grains",
      title: "Grains",
      element: <Grains/>
    }
  ]

  return (
    <div>
      <Navabar RouteData={Routes} />
      <AllRoutes RouteData={Routes} />
    
    </div>
  )
}