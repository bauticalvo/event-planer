import { useState } from "react"
import { HeroSection2 } from "../Components/Home/Hero/heroSection2"
import { StockPolaroids } from "../Components/Home/Stories/StockPolaroids"
import { Loader } from "../Components/Home/Loader/Loader"
import { Testimonial } from "../Components/Home/Testimonial/Testimonial"
import { Services } from "../Components/Home/Services/Services"
import { About } from "../Components/Home/About/About"
import { Contact } from "../Components/Home/Contact/Contact"
import { InfoSection } from "../Components/Home/Hero/InfoSection"



export const Home = ({startTransition, setShowParticles, showParticles}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <div >
      <div id="start">

      </div>
        <HeroSection2 
          isVideoLoaded={isVideoLoaded} 
          setIsVideoLoaded={setIsVideoLoaded} 
          startTransition={startTransition} 
          setShowParticles={setShowParticles}
          showParticles={showParticles}
        />
        <div className="relative top-[vh] h-[100vh]">
          <div className="bg-gradient-to-b from-transparent to-background h-[50vh] absolute -top-[50vh] left-0 w-full"></div>
          <InfoSection />
        </div>
        <section id="services">
          <Services />
        </section>
        <div className="h-[50vh]"></div>
        <section id="stories">
          <StockPolaroids />
        </section>
        <div className="h-[50vh]"></div>
        <section id="testimonials">
          <Testimonial />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />          
        </section>
        <div className="h-[30vh]"></div>

        {
          !isVideoLoaded && <Loader />
        }
    </div>
  )
}