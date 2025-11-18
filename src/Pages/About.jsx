import { useEffect, useRef } from 'react'
import { HeroAbout } from '../Components/About/HeroAbout'
import { MisionSection } from '../Components/About/MisionSection'
import { TeamSection } from '../Components/About/TeamSection'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const About = () => {
  const aboutRef = useRef(null);
  const misionRef = useRef(null);

  useEffect(() => {
    if (!aboutRef?.current || !misionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(misionRef.current, {
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top",
          end: "+=2000", // controlás cuánto dura el scroll (ajustable)
          scrub: true,
          pin: true,
        },
      });
    }, misionRef);

    return () => ctx.revert();
  }, [aboutRef]);

  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <div ref={aboutRef}>
        <HeroAbout />
      </div>
      <div ref={misionRef} className='w-full'>
      <MisionSection />
      <TeamSection />
      </div>
    </div>
  )
}

export default About
