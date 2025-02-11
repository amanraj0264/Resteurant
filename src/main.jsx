import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navbar } from './layouts/Navbar.jsx'
import { Home } from './pages/home/Home.jsx'
import { About } from './pages/about/About.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    
  </StrictMode>,
)
