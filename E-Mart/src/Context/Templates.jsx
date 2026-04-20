import React, { createContext, useState } from 'react'

export const TemplatesCon = createContext()

export default function Templates({ children }) {
  const [theme, settheme] = useState(false)

  return (
    <TemplatesCon.Provider value={{ value: theme, changetheme: settheme }}>
      {children}
    </TemplatesCon.Provider>
  )
}