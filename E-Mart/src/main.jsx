import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import Templates from './Context/Templates.jsx'
import Authication from './Context/Authication.jsx'
import AllProductProvider from './Context/Allproduct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Authication>
        <Templates>
          <AllProductProvider>
            <App />
          </AllProductProvider>
        </Templates>
      </Authication>
    </BrowserRouter>
  </StrictMode>
)