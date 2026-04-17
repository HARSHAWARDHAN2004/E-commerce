import React, { useState } from 'react'
import Navbar from './Navabar'
import AllRoutes from './AllRoutes'

export default function Login({ Routes }) {

  const [role, setRole] = useState("")

  return (
    <> <Navbar RouteData={Routes} />
          <AllRoutes RouteData={Routes} />
    </>
  )
   
}