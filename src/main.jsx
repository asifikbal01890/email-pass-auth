import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './components/Routes/route.jsx'
import { Toaster } from 'react-hot-toast'
import AuthContext from './components/Providers/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={route} />
      <Toaster />
    </AuthContext>
  </StrictMode>,
)
