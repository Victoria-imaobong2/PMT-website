import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appi from "./Appi.jsx";
import Chit from './chit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appi />
  </StrictMode>,
)
