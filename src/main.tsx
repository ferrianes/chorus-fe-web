import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Register } from './pages/auth/register/page'
import { Layout as AuthLayout } from './pages/auth/layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
