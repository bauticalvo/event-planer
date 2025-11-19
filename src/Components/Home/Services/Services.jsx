import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efectos parallax mínimos y sutiles
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const scaleImage1 = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const scaleImage2 = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="w-full h-auto bg-background p-6 md:p-10 relative z-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="w-full h-auto flex flex-col lg:flex-row gap-10 lg:gap-16 bg-secondary px-4 py-10 md:px-16 lg:px-[20vh] lg:py-[10vh] z-20"
        variants={containerVariants}
      >
        <motion.section 
          className="w-full lg:w-2/3 flex flex-col space-y-6 relative"
          variants={containerVariants}
        >
          <motion.p 
            className="font-bold uppercase text-sec-surface text-sm md:text-base"
            variants={itemVariants}
          >
            Mi Especialidad
          </motion.p>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-text font-cormorant italic"
            variants={itemVariants}
          >
            Servicios que ofrezco
          </motion.h2>

          <motion.p 
            className="text-text-alt text-lg md:text-xl font-medium leading-relaxed"
            variants={itemVariants}
          >
            Diseñando bodas auténticas y eventos que se sienten personales,
            pensados para reflejar tu esencia en cada detalle.
          </motion.p>

          <motion.img
            src="/images/stock/fotoprueba1.jpg"
            className="w-full h-auto object-cover"
            variants={imageVariants}
            style={{
              y: yImage1,
              scale: scaleImage1
            }}
          />
        </motion.section>

        <motion.section 
          className="w-full lg:w-1/3 flex flex-col space-y-6"
          variants={containerVariants}
        >
          <motion.img
            src="/images/stock/fotoprueba2.jpg"
            className="w-full h-auto object-cover"
            variants={imageVariants}
            style={{
              y: yImage2,
              scale: scaleImage2
            }}
          />

          <motion.p 
            className="text-text-alt text-lg md:text-xl font-medium leading-relaxed"
            variants={itemVariants}
          >
            Mi objetivo es que vivas un día lleno de calma, belleza y emoción, 
            un momento que puedas recordar siempre con una sonrisa.
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};