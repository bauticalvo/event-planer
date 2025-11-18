import { Route, Routes } from 'react-router'
import './App.css'
import { FloaterMenu } from './Components/Header/FloaterMenu'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import { usePageTransition } from './Components/Hooks/usePageTransition'
import { PageTransition } from './Components/Transition/PageTransition'
import { Footer } from './Components/Footer/Footer'
import { useState } from 'react'
import { Menu } from './Components/Header/Menu'
import useScrollToTop from './Components/Hooks/useScrollTop'

function App() {
  const { isTransitioning, startTransition } = usePageTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showParticles, setShowParticles] = useState(false);
  
  useScrollToTop();

  return (
    <main className='bg-background text-text font-satoshi overflow-x-scroll no-scrollbar'>
      <Header 
        startTransition={startTransition}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isActive={showParticles}
        />
        {
          isMenuOpen && <Menu startTransition={startTransition} setIsMenuOpen={setIsMenuOpen} />
        }
      <Routes>
        <Route index element={<Home startTransition={startTransition} showParticles={showParticles} setShowParticles={setShowParticles} />} />
      </Routes>
      <PageTransition show={isTransitioning} />
      <Footer startTransition={startTransition} />
    </main>
  )
}

export default App
