import React, { createContext, useState } from 'react'

export const AuthicationCon = createContext()

export default function Authication({ children }) {

  const [isAuth, setAuth] = useState(false) // ✅ MUST be false

  return (
    <AuthicationCon.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthicationCon.Provider>
  )
}