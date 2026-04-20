import React, { createContext, useState } from 'react'

export const AuthicationCon = createContext()

export default function Authication({ children }) {
  const [isAuth, setAuth] = useState(true)

  return (
    <AuthicationCon.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthicationCon.Provider>
  )
}