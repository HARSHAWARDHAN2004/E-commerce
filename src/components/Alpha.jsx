import React, { createContext, useContext } from 'react'
import { data } from '../main'

export default function Alpha() {

    let cart=useContext(data)
    console.log(cart)
  return (
    <div>Alpha</div>
  )
}
