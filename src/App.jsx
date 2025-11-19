import { Route, Routes } from 'react-router'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home'
import { usePageTransition } from './Components/Hooks/usePageTransition'
import { PageTransition } from './Components/Transition/PageTransition'
import { Footer } from './Components/Footer/Footer'
import { useState } from 'react'
import { Menu } from './Components/Header/Menu'
import useScrollToTop from './Components/Hooks/useScrollTop'
import { useLenisSmoothScroll } from './Components/Hooks/useSmoothScroll'

function App() {
  const { isTransitioning, startTransition } = usePageTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showParticles, setShowParticles] = useState(false);
    useLenisSmoothScroll();
  useScrollToTop();
  const scrollToSection = (sectionId) => {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ block: "start", behavior: "smooth" });
    } else {
      console.log("No se encontró la sección");
    }
  };


  return (
    <main  className='bg-background text-text font-satoshi overflow-x-scroll no-scrollbar'>
      <Header 
        startTransition={startTransition}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isActive={showParticles}
        scrollToSection={scrollToSection}
        />
        {
          isMenuOpen && <Menu 
          startTransition={startTransition} 
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          />
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
