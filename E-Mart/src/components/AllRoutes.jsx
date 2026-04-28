import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Search from './Search'

export default function AllRoutes({ RouteData }) {

  return (
    <Routes>

      {/* Dynamic Routes */}
      {RouteData.map((route) => (
        <Route 
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}

     
      <Route path="/search" element={<Search />} />

    </Routes>
  )
}