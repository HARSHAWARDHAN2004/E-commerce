import React from 'react'

import AllRoutes from './AllRoutes'
import AddCard from './Editor/AddCard'
import ShowCard from './Editor/ShowCard'
import Navabar from './Navabar'

import Home from './Customer/Home'
import Clothes from './Customer/Clothes'
import Electronic from './Customer/Electronic'
import Dailyneeds from './Customer/Dailyneeds'
import FruitandVeg from './Customer/FruitandVeg'
import Grains from './Customer/Grains'
import History from './Customer/History'
import TotalUsers from './Editor/TotalUsers'
import Order from './Customer/Order'
import Userhistory from './Editor/UserHistory'
import UserHistory from './Editor/UserHistory'
import UserOrder from './Editor/UserOrder'


export default function Admin() {
      let routesList = [
          { path: "/", title: "Home", element: <Home /> },
          { path: "/clothes", title: "Clothes", element: <Clothes /> },
          { path: "/electronics", title: "Electronics", element: <Electronic /> },
          { path: "/daily", title: "Daily Needs", element: <Dailyneeds /> },
          { path: "/fruits", title: "Fruits & Vegetables", element: <FruitandVeg /> },
          { path: "/grains", title: "Grains", element: <Grains /> },
         
          {path:"edit", title:"Edit_Data", element:<ShowCard/>},
           {path: "/add", title: "Add_Data", element: <AddCard/>},
           { path: "/userhistory", title: "User_Cart(History)", element: <UserHistory/> },
           { path: "/totaluser", title: "Userdetail", element: <TotalUsers/> },
            { path: "/userorder", title: "UserOrder", element: <UserOrder/> },
         
        ]
   return (
      <div >
      <Navabar RouteData={routesList}/>
      <AllRoutes RouteData={routesList} />
      
       
      </div>
      
      
    )
}
