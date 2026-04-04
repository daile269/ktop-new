import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Kiểm tra biến môi trường
console.log("🚀 [ENV CHECK] VITE_API_URL:", import.meta.env.VITE_API_URL);
console.log("🚀 [ENV CHECK] VITE_SITE_ID:", import.meta.env.VITE_SITE_ID || "Not set (Defaulting to no prefix)");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
