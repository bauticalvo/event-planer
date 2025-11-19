import { motion, AnimatePresence } from 'framer-motion';
import { ImQuotesLeft } from "react-icons/im";
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Trabajar con Valeria Rodriguez fue una experiencia excepcional. Su atención al detalle y dedicación para hacer de nuestro evento un éxito fue impresionante. Desde la planificación inicial hasta la ejecución final, cada aspecto fue manejado con profesionalismo y creatividad. ¡Recomendaría sus servicios a cualquiera que busque una experiencia inolvidable!",
    author: "Jose Ramirez"
  },
  {
    id: 2,
    text: "Increíble trabajo el de Valeria Rodriguez. Transformaron nuestra visión en una realidad mágica. Cada detalle fue cuidado al máximo y el resultado superó todas nuestras expectativas. Un equipo verdaderamente talentoso y comprometido.",
    author: "María González"
  },
  {
    id: 3,
    text: "La elegancia y sofisticación que Valeria Rodriguez aportó a nuestra boda fue incomparable. Su capacidad para entender nuestro estilo y convertirlo en algo tangible fue extraordinaria. Un servicio de primera clase en todos los sentidos.",
    author: "Carlos y Ana López"
  },
  {
    id: 4,
    text: "Profesionalismo, creatividad y una atención al detalle impecable. Valeria Rodriguez hizo de nuestro día especial una obra de arte viviente. No podríamos estar más agradecidos por tan maravillosa experiencia.",
    author: "Roberto Sánchez"
  }
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };


  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen py-20 w-full flex items-center justify-center text-text-alt "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="bg-secondary w-11/12 sm:w-4/5 lg:max-w-5xl p-6 sm:p-10  relative overflow-hidden"
        variants={containerVariants}
      >
        
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.section 
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="w-full h-full flex flex-col items-center justify-center border border-text-alt/30 space-y-6 sm:space-y-10 p-6 sm:p-10 lg:p-14 relative bg-secondary/80 backdrop-blur-sm "
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-text-alt/5 via-transparent to-transparent opacity-50"></div>
              
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <ImQuotesLeft className="text-4xl sm:text-6xl text-text-alt/60 m-2 relative z-10" />
                <div className="absolute inset-0 bg-text-alt/10 blur-lg  scale-150"></div>
              </motion.div>

              <motion.h5 
                className="px-2 sm:px-8 text-text font-bodoni text-lg sm:text-xl lg:text-2xl text-center italic leading-relaxed tracking-wide relative z-10 min-h-[200px] flex items-center"
                variants={itemVariants}
              >
                "{testimonials[currentIndex].text}"
              </motion.h5>

              <motion.div 
                className="w-auto flex items-center space-x-4 pt-4 relative z-10"
                variants={itemVariants}
              >
                <span className="w-12 h-0.5 inline-block bg-gradient-to-r from-text-alt/80 to-text-alt/40"></span>
                <p className="font-bold text-lg sm:text-xl text-text-alt tracking-wide font-serif">
                  {testimonials[currentIndex].author}
                </p>
              </motion.div>

            </motion.section>
          </AnimatePresence>

          <motion.div 
            className="flex justify-center items-center space-x-8 mt-8 relative z-20"
            variants={itemVariants}
          >
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-text-alt scale-125' 
                      : 'bg-text-alt/30 hover:bg-text-alt/50'
                  }`}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};