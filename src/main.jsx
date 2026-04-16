import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

export const data =createContext()

createRoot(document.getElementById('root')).render(
  <data.Provider value={{count:1}}>
    <App />
  </data.Provider>,
)
