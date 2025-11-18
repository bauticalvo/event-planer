import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { phoneNumber } from '../../Data/data';

gsap.registerPlugin(ScrollTrigger);

export const HeroContact = () => {
  const image2Ref = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!image2Ref.current) return;

    const ctx = gsap.context(() => {
      // Animación de la imagen
      gsap.to(image2Ref.current, {
        scale: 0.95,
        y: -40,
        filter: "blur(2px)",
        borderRadius: 22,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: image2Ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Animación del formulario
      gsap.from(formRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

    }, image2Ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className='h-full lg:h-auto w-full flex flex-col items-center space-y-16 relative'>
      {/* Sección de imagen hero */}
      <section className="h-[40vh] lg:h-[50vh] w-full">
        <img 
          src="/images/image-3.jpg"
          ref={image2Ref}
          alt="hero-about"
          className='h-full w-full object-cover'
        />
        <div className='absolute bg-gradient-to-t from-background to-transparent top-0 left-0 z-10 h-[40vh] lg:h-[50vh] w-full'></div>
      </section>

      {/* Sección de contenido */}
      <section className='flex flex-col lg:flex-row justify-center h-full px-4 md:px-10 space-y-8 lg:space-y-0 w-full '>
        {/* Columna izquierda - Título */}
        <div className='w-full lg:w-1/2 flex flex-col'>
          <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-bold mb-8">Contacto</h1>
          {/* Subtítulo */}
          <p className="text-2xl 2xl:text-3xl text-secondary w-[75%]">
            Si tienes alguna pregunta o comentario, no dudes en contactarnos.
            Estaremos encantados de responderte.
          </p>
        </div>

        {/* Columna derecha - Formulario y WhatsApp */}
        <div 
          ref={formRef}
          className='w-full lg:w-1/2 space-y-8'
        >
          {/* Formulario de contacto */}
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold'>Envíanos un mensaje</h2>
            <form className='space-y-4'>
              <div>
                <input 
                  type="text" 
                  placeholder="Nombre"
                  className='w-full bg-background border-b border-white/30 py-2 px-1 focus:outline-none focus:border-secondary'
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className='w-full bg-background border-b border-white/30 py-2 px-1 focus:outline-none focus:border-secondary'
                />
              </div>
              <div>
                <textarea 
                  placeholder="Mensaje"
                  rows={4}
                  className='w-full bg-background border-b border-white/30 py-2 px-1 focus:outline-none focus:border-secondary'
                />
              </div>
              <button 
                type="submit"
                className='mt-4 px-6 py-3 bg-secondary text-background font-medium rounded-lg hover:bg-secondary/80 transition-colors'
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Sección WhatsApp */}
          <div className='py-8'>
            <p className='text-lg mb-4'>O escribinos al WhatsApp</p>
            <a 
              href={`https://wa.me/${phoneNumber}` }
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex items-center px-6 py-3 bg-secondary text-background font-medium rounded-lg hover:bg-green-700 transition-colors'
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar mensaje
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}