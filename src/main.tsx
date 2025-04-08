import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/header.tsx'
import { Content } from './components/content.tsx'
import { Footer } from './components/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Content />
    <Footer />
  </StrictMode>,
)
