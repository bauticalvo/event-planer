import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion"

gsap.registerPlugin(SplitText);

export const HeroSection = () => {
  const videoRef = useRef();
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

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

    const startValue = isMobile ? "top 50%" : "center 50%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
    <section
      ref={sectionRef}
      id="hero"
      className="relative z-10 w-full h-screen overflow-hidden"
    >
      {/* CONTENIDO ENCIMA DEL VIDEO */}
      <div className="absolute inset-0 z-10 grid grid-rows-2 h-full text-light text-center px-4">
        <div className="flex flex-col items-center justify-end">
          <h1 className="text-6xl md:text-9xl font-bold">brÖder</h1>
          <h2 className="text-6xl md:text-3xl font-medium italic" class="glitch-text" data-text="DONDE LA MÚSICA COBRA VIDA">DONDE LA MÚSICA COBRA VIDA</h2>
        </div>
        <div className=" w-full grid grid-cols-3 px-16 ">
            <section className="flex items-center justify-center text-start font-bold uppercase">
              <h2 className="mt-6 text-lg text-secondary  2xl:text-2xl ">
              Transformamos San Juan en 
              <br/>
              <span className="text-light">El epicentro de la cultura electrónica</span>
              </h2>
            </section>
            <div className="h-full relative hidden lg:flex items-center justify-end">
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 20 : 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <motion.div
                  className="flex flex-col items-center cursor-pointer"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-xs mb-2 tracking-wider">DESCUBRE MÁS</span>
                  <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
                    <motion.div
                      className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <section className="flex items-center justify-center" >
            </section>
        </div>
      </div>
    </section>
    {/* VIDEO COMO FONDO */}
    <div className="absolute inset-0 z-0 video">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src="/videos/output2.mp4"
      />
      {/* <img 
        src="/images/noise.png"
        alt="hero"
        className="w-full h-full object-cover opacity-90 absolute inset-0 "
      /> */}
    </div>
    </>
  );
};
