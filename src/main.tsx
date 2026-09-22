import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <HomePa
        <Route path="/" element={<HomePage />} />
        <Route path='/agent/:uuid' element={<AgentPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
