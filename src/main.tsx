import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from 'emailjs-com'
import './index.css'
import App from './App.tsx'

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID || '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
