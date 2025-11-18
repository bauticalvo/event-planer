import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MisionSection = () => {
  const sectionRef = useRef();
  const missionRef = useRef();
  const visionRef = useRef();
  const dividerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Divider animado
      gsap.fromTo(
        dividerRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom center',
            scrub: true,
          },
        }
      );

      // Misión
      gsap.from(missionRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      // Visión
      gsap.from(visionRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: visionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-background px-6 md:px-24 py-32 overflow-hidden"
    >
      {/* Divisor vertical */}
      <div
        ref={dividerRef}
        className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-light/30 to-transparent transform scale-y-0 origin-top z-0"
      />

      {/* Misión */}
      <div ref={missionRef} className="max-w-5xl mx-auto mb-32 z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-light mb-8 tracking-tight">
          Misión
        </h2>
        <p className="text-xl md:text-2xl text-secondary/80 leading-relaxed max-w-4xl">
          Desde brÖder trabajamos para diseñar, producir y consolidar experiencias musicales de excelencia, que integren cultura, turismo y paisaje. A través de una curaduría artística cuidada, propuestas innovadoras y producción técnica de alta calidad, buscamos generar eventos que conecten con las nuevas audiencias y posicionen a San Juan como un destino cultural referente a nivel nacional.
        </p>
      </div>

      {/* Visión */}
      <div ref={visionRef} className="max-w-5xl mx-auto z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-light mb-8 tracking-tight text-end">
          Visión
        </h2>
        <p className="text-xl md:text-2xl text-secondary/80 leading-relaxed max-w-4xl text-end ml-auto">
          Queremos posicionar a San Juan como el nuevo epicentro nacional de la música electrónica y el rock alternativo. Imaginamos eventos sunset en el Estadio del Bicentenario, con las montañas como escenario natural, un line-up de primer nivel y una experiencia visual, sensorial y turística que conecte con el público joven y creativo.
        </p>
      </div>
    </section>
  );
};
