import React, { useState } from 'react'
import { useContext } from 'react'

export const Allproduct=useContext({children })

export default function Allproduct() {

let product = await fetch ('http://localhost:3000/AllProduct') 
let actualdata= JSON.stringify(product)

let [data,setdata]=useState(actualdata)    
let obj={
    data,setdata
}

  return (
    <div>Allproduct</div>
  )
}
