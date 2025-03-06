import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// main.jsx
import { App } from './App'; // if using named export


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
