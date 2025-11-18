import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroAbout = () => {
  const imageRef = useRef(null);


    useEffect(() => {
        if (!imageRef.current ) return;
    
        const ctx = gsap.context(() => {
          gsap.to(imageRef.current, {
            scale: 0.95,
            y: -40,
            filter: "blur(2px)",
            borderRadius: 22,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }, imageRef);
    
        return () => ctx.revert();
      }, );
    return (
        <div className='h-full lg:h-screen w-full flex flex-col items-center space-y-16 relative '>
            <section 
                className="h-[40%] lg:h-[50%] w-full "
                >
                <img 
                    src="/images/image-6.jpg"
                    ref={imageRef}
                    alt="hero-about"
                    className='h-full w-full object-cover  '
                />
                <div className='absolute bg-gradient-to-t from-background to-transparent top-0 left-0 z-10 h-[40%] lg:h-[50%] w-full'></div>
            </section>
            <section className='flex flex-col justify-center h-full px-4 md:px-10 space-y-4 pb-10 '>
                <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-bold">brÖder</h1>
                <p className="text-xl md:text-3xl 2xl:text-4xl text-secondary w-[90%]">
                    Somos una productora joven y creativa especializada en eventos musicales de alto impacto.
                    <br/>
                    Desde <span className="text-light font-semibold">brÖder</span> impulsamos una visión:
                    convertir a San Juan en un escenario
                    nacional de cultura,turismo y música,
                    através de eventos de alto nivel y
                    producción responsable.
                </p>
            </section>
            
        </div>
    )
}