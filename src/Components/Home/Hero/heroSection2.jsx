import { useRef, useEffect } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { SandComponent } from "./SandComponent";
// import { InfoSection } from "./InfoSection"; // Se mantiene por referencia

gsap.registerPlugin(ScrollTrigger);

export const HeroSection2 = ({ isVideoLoaded, setIsVideoLoaded, setShowParticles, startTransition,showParticles }) => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const particlesShownRef = useRef(false); 

  useEffect(() => {
    if (!isVideoLoaded) return;

    // --- Inicialización de SplitText (Sin cambios) ---
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // --- Animaciones de Entrada (Sin cambios) ---
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    // --- Configuración de ScrollTrigger ---
    const startValue = isMobile ? "top 0%" : "center 50%";
    const endValue = isMobile ? "120% top" : "=+2300";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#videoHero", // Usar el ID del video como trigger es más seguro
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
        
        // =======================================================
        // 🚨 CAMBIO CLAVE: Activación del estado de las partículas
        // =======================================================
        onUpdate: (self) => {
          // self.progress es un valor entre 0 y 1.
          // Si el progreso es mayor o igual a 0.95 (casi terminado)
          if (self.progress >= 0.95 && !particlesShownRef.current) {
            
            // Llama a la función que activará el componente de partículas
            setShowParticles(true); 
            particlesShownRef.current = true;
            
          } else if (self.progress < 0.95 && particlesShownRef.current) {
            // Opcional: Desactiva las partículas si el usuario hace scroll hacia arriba
            setShowParticles(false);
            particlesShownRef.current = false;
          }
        },
      },
    });

    tl.to(videoRef.current, {
      currentTime: videoRef.current.duration,
    });

    return () => {
      heroSplit.revert();
      paragraphSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isVideoLoaded, isMobile, setShowParticles]); // Añadido setShowParticles a las dependencias

  return (
    <>
      <section id="hero" className="relative z-10"> {/* Añadido relative z-10 para asegurar que el contenido esté por encima del video */}
        <div className="flex flex-col w-full h-[100vh] justify-center items-center text-center ">
          <h1 className="title mt-[10vh] font-bodoni italic text-5xl md:text-8xl text-background">Valeria Rodriguez</h1>
          <h2 className="subtitle italic text-xl md:text-3xl text-background mt-4">
             Tu event planner de bodas y celebraciones con estilo 
          </h2>
          {/* Aquí puedes añadir el subtítulo si lo tienes, he puesto un ejemplo */}
        </div>
        <div className=" h-screen"></div> 
        <div className="lg:h-[100vh]  " >
          {/* <InfoSection startTransition={startTransition} /> */}
          <SandComponent isActive={showParticles} />
        </div>
      </section>
      
      {/* El video debe estar en una capa inferior (z-index) */}
      <div className="absolute inset-0 z-0"> 
        <video
          ref={videoRef}
          className="w-full h-full object-cover "
          muted
          playsInline
          preload="auto"
          src="/videos/herosection/output4.mp4"
          id="videoHero"
          onLoadedData={() => setIsVideoLoaded(true)}
        />
      </div>
    </>
  );
};