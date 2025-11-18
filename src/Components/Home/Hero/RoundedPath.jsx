import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const RoundedPath = () => {
  const pathRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const text = textRef.current;

    if (!path) return;

    const pathLength = path.getTotalLength();

    // Inicializamos el trazo oculto
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animamos el trazo mientras se hace scroll
    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: path,
        start: 'top 80%',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Animamos la opacidad del texto
    if (text) {
      gsap.fromTo(
        text,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: path,
            start: 'top 80%',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="871"
      height="572"
      viewBox="0 0 871 572"
      fill="none"
    >
      <path
        ref={pathRef}
        id="myPath"
        d="M306.5 287C320.055 116.016 401.5 1 589.5 1C777.5 1 870.5 118.5 870.5 287C870.5 455.5 789.5 571 589.5 571C389.5 571 291.924 439.628 272.5 260H0"
        stroke="#2B292B"
        strokeWidth="2"
        fill="none"
      />

      <text fontSize="28" fill="#FFFFFF">
        <textPath ref={textRef} href="#myPath">
          Transformando San Juan en el epicentro de la cultura electrónica
        </textPath>
      </text>
    </svg>
  );
};
