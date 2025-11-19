import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import { MobileImages, TabletImages, DesktopImages, DesktopLargeImages } from './getImagesConfig';

gsap.registerPlugin(ScrollTrigger);



export const StockPolaroids = () => {
    const sectionRef = useRef();
    const imageRefs = useRef([]);
    const textRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1535 });
  
  const images = isMobile ? MobileImages : isTablet ? TabletImages : isDesktop ? DesktopImages : DesktopLargeImages;

useEffect(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            // Mantener el scroll lento y largo
            end: `+=${images.length * 250}vh`, 
            scrub: true,
            pin: true,
          },
        });

        imageRefs.current.forEach((el, i) => {
          const config = images[i];

          tl.fromTo(
            el,
            { 
              // La animación empieza desde la posición final y se mueve a la inicial
              y: `${config.finalY}%`,
              x: `${config.finalX}%`, 
              scale: config.initialScale, 
              rotation: 0 
            },
            { 
              // La animación termina en la posición deseada
              y: `${config.initialY}%`, 
              x: `${config.initialX}%`,
              scale: 1, 
              rotation: config.rotation,
              duration: 1 
            },
            i // Posición de inicio en la timeline
          );
        });

        // =======================================================
        // 🚨 CAMBIO CLAVE: Sincronizar el texto
        // =======================================================
        const lastImageIndex = images.length - 1;
        const textStartTime = lastImageIndex + 0.3; // Inicia cuando la última imagen está al 30% de su animación

        // 1. Asegurarse de que el texto está oculto inicialmente
        gsap.set(textRef.current, { opacity: 0, y: 50 }); 

        // 2. Animar el texto para que aparezca
        tl.to(
            textRef.current,
            {
                opacity: 1,
                y: 0, // Vuelve a su posición central
                scale: 1,
                duration: 0.7, // Duración corta para que aparezca rápido
                ease: "power2.out"
            },
            textStartTime // <-- Aquí se sincroniza con el final de la última foto
        );
        // =======================================================

      }, sectionRef);

      return () => ctx.revert();
    }, []);

    return (
      <section ref={sectionRef} className={`relative w-full h-screen bg-background flex items-center justify-center
        bg-cover bg-center bg-[url('/images/escenarios/escenario5.jpg')]`}
      >
        <div 
          ref={textRef}
          className='absolute text-text flex flex-col items-center justify-center space-y-4 '>
                <p className="font-bold uppercase text-sec-surface text-sm lg:text-base">
                    Historias Destacadas
                </p>
                <h2 className="w-1/2 text-center text-2xl lg:text-2xl 2xl:text-4xl font-bold text-text font-cormorant italic ">
                    Un vistazo a las celebraciones más bellas que he diseñado y orquestado con pasión.
                </h2>
                
          <button
            className="bg-text text-secondary px-6 lg:px-8 py-3 lg:py-3  text-lg lg:text-xl font-semibold hover:bg-text/70 transition duration-300"
          >
            Ver Más Historias 
          </button>
        </div>
        {images.map((element, i) => (
          // Contenedor principal: Usamos una clase para posicionar libremente la imagen
          <div
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            // La clase 'absolute' y 'w-[300px]' permite posicionar y rotar libremente
            // He añadido un tamaño fijo y centrado al inicio para que el 'x' y el 'y' funcionen como desplazamiento
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-auto lg:w-[15vw] "
            style={{ zIndex: i + 10 }} // Aumentar Z-index para que se apilen correctamente
          >
            {/* <div className='flex items-end justify-center h-full w-full z-10 absolute top-0'>
              <p className='text-3xl'>{i}</p>
            </div> */}
            {
              element.type === "image" ?
              <img
                src={element.src}
                alt={`image-${i}`}
                // Eliminar w-full y h-full y usar object-cover para que la imagen se ajuste a los 300px
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              /> : (
                // ... (El código de video permanece igual pero ahora está contenido en el div de 300px)
                <div className='flex flex-col lg:flex-row space-x-0 w-full h-full rounded-xl'>
                    {/* ... (Contenido del video) ... */}
                </div>
              )
            }
          </div>
        ))}
      </section>
    );
  };