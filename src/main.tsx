import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Register } from './pages/auth/register/page'
import { AuthLayout } from './pages/auth/layout'
import { RootLayout } from './pages/layout'
import { Login } from './pages/auth/login/page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<AuthLayout />}>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
