import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Register } from './pages/auth/register/page'
import { AuthLayout } from './pages/auth/layout'
import { RootLayout } from './pages/layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<AuthLayout />}>
            <Route index element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
