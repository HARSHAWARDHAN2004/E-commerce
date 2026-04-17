import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Admin from './Admin'
import Login from './login'

export default function AllRoutes({RouteData
  
}) {
  return (
    <Routes>

       { RouteData.map((el,i,arr)=>{
            return <Route key={i} path={el.path} element={el.element} />
        })}

           
    
   
        
    </Routes>
  )
}
