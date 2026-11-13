import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import tailwindcss from '@tailwindcss/vite'
import './index.css'
import Index from './pages/Index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index/>
    tailwindcss(),
  </StrictMode>,
)
