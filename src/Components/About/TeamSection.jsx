import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { team } from '../../Data/data';
import { TeamCard } from './TeamCard';

gsap.registerPlugin(ScrollTrigger);

export const TeamSection = () => {
  const sectionRef = useRef();
  const cardRefs = useRef([]);
  const dividerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del divisor central
      gsap.fromTo(
        dividerRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        }
      );

      // Animación de las cards izquierda / derecha
      cardRefs.current.forEach((card, i) => {
        const isEven = i % 2 === 0;

        gsap.fromTo(
          card,
          {
            x: isEven ? '-100%' : '100%',
            opacity: 0,
            rotate: isEven ? -10 : 10,
            filter: 'blur(10px)',
          },
          {
            x: '0%',
            opacity: 1,
            rotate: 0,
            filter: 'blur(0px)',
            ease: 'power4.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom center',
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-background overflow-hidden py-32 px-4 md:px-20"
    >

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-light m-12">
        Nuestro equipo
      </h1>

      {/* Divisor central animado */}
      <div
        ref={dividerRef}
        className="absolute  lg:flex top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent z-0 origin-top"
      />

      <div className="relative w-full  mx-auto space-y-48 z-10">
        {team.map((element, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`w-full flex flex-col md:flex-row ${
              i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            <div className="md:w-1/2 lg:px-10">
              <TeamCard element={element} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
