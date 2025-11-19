import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { phoneNumber, whatsappMessage } from "../../../Data/data"

export const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efectos parallax más pronunciados
  const yLeft = useTransform(scrollYProgress, [0, 1], [-100, 50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [100, -50]);
  
  const scaleLeft = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const scaleRight = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);


  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="lg:p-20 h-auto w-full overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="bg-secondary w-full h-auto lg:h-screen grid grid-cols-1 lg:grid-cols-3 lg:px-10 lg:py-24 relative"
        style={{ opacity }}
      >
        {/* Imagen izquierda - Parallax pronunciado */}
        <motion.div 
          className="col-span-1 lg:col-span-1 h-auto flex flex-col justify-center items-center p-10 order-1 lg:order-1 relative"
          variants={containerVariants}
        >
          <motion.img 
            src="/images/stock/fotoprueba1.jpg" 
            alt="Valeria Rodriguez - Event Planner" 
            className="w-auto h-full object-cover shadow-2xl"
            variants={imageVariants}
            style={{
              y: yLeft,
              scale: scaleLeft,
            }}
          />
        </motion.div>

        {/* Contenido central */}
        <motion.div 
          className="col-span-1 lg:col-span-1 flex flex-col justify-center items-center text-center gap-5 p-10 order-3 lg:order-2 relative "
          variants={containerVariants}
        >
          <motion.p 
            className="font-bold uppercase text-sec-surface text-sm lg:text-base"
            variants={itemVariants}
          >
            Contáctame
          </motion.p>
          
          <motion.h2 
            className="text-3xl lg:text-5xl font-bold text-text font-cormorant italic"
            variants={itemVariants}
          >
            Tienes alguna pregunta? 
          </motion.h2>
          
          <motion.p 
            className="text-text-alt text-lg lg:text-xl font-medium leading-relaxed max-w-md"
            variants={itemVariants}
          >
            Me encantaria saber de ti. Ya sea que tengas preguntas sobre mis servicios o
            quieras discutir ideas para tu evento, no dudes en contactarme.
          </motion.p>
          
          <motion.button 
            className="bg-background text-text px-6 lg:px-10 py-3 lg:py-4 text-lg lg:text-xl font-semibold hover:bg-secondary transition duration-300 shadow-lg relative overflow-hidden group"
            onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative group-hover:text-background transition-colors duration-300">
              Hablemos!
            </span>
            <motion.div 
              className="absolute inset-0 bg-text transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              initial={false}
            />
          </motion.button>
        </motion.div>

        {/* Imagen derecha - Parallax pronunciado */}
        <motion.div 
          className="col-span-1 lg:col-span-1 flex flex-col justify-center items-center p-10 order-2 lg:order-3 relative"
          variants={containerVariants}
        >
          <motion.img 
            src="/images/stock/fotoprueba2.jpg" 
            alt="Valeria Rodriguez - Event Planner" 
            className="w-auto h-full object-cover shadow-2xl"
            variants={imageVariants}
            style={{
              y: yRight,
              scale: scaleRight,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};