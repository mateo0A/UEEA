import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../draggable/square.js'
import '../javascript/subMenu.js'
import '../javascript/menuHover.js'
import '../animations/menuPlace.js'
import '../animations/contentMain.js'
import '../styles/actividades.css'
import '../animations/cardsActivities.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
