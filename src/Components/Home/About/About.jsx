import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects para las imágenes
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1.13]);

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
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="flex justify-center items-center w-full h-auto md:h-screen p-4 lg:px-10 2xl:px-60 bg-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="hidden lg:flex absolute bottom-15 left-40 w-5/12 h-1/3 bg-secondary/50 z-0"
        variants={backgroundVariants}
      />
      
      <div className="w-full h-full flex flex-col justify-center items-center lg:flex-row gap-8">
        {/* Imagen grande - Parallax más pronunciado */}
        <motion.div 
          className="hidden lg:flex flex-col w-2/6 justify-center items-center h-full space-y-4 relative order-2 lg:order-1"
          variants={containerVariants}
        >
          <motion.img 
            src="/images/otros/vr2.png" 
            alt="Valeria Rodriguez - Event Planner" 
            className="w-auto h-[85%] object-cover"
            variants={imageVariants}
            style={{
              y: y1,
              scale: scale1
            }}
          />
        </motion.div>

        <motion.div 
          className="flex flex-col lg:w-2/3 h-[80%] justify-center items-center lg:items-start space-y-4 lg:space-y-12 order-1 lg:order-2 z-10"
          variants={containerVariants}
        >
          <motion.p 
            className="font-bold uppercase text-sec-surface text-sm md:text-base"
            variants={itemVariants}
          >
            Conoce a Valeria Rodríguez
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-text font-cormorant italic text-center lg:text-left"
            variants={itemVariants}
          >
            Tu event planner de bodas y celebraciones con estilo 
          </motion.h2>
          
          <motion.section 
            className="flex flex-col md:flex-row space-x-4"
            variants={containerVariants}
          >
            {/* Imagen pequeña - Parallax más suave */}
            <motion.div 
              className="md:w-1/3 md:h-full flex justify-center items-center"
              variants={imageVariants}
            >
              <motion.img 
                src="/images/otros/vr1.png" 
                alt="Valeria Rodriguez - Event Planner" 
                className="md:w-auto w-1/2 md:h-full object-cover" 
                style={{
                  y: y2,
                  scale: scale2
                }}
              />
            </motion.div>
            
            <motion.div 
              className="p-10 md:w-1/2 flex flex-col space-y-4"
              variants={containerVariants}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-text font-cormorant italic"
                variants={itemVariants}
              >
                Un Poco Sobre Mí
              </motion.h2>

              <motion.p 
                className="text-text-alt text-lg md:text-xl font-medium leading-relaxed"
                variants={itemVariants}
              >
                Diseñando bodas auténticas y eventos que se sienten personales,
                pensados para reflejar tu esencia en cada detalle.
              </motion.p>
              
              <motion.div 
                className="pt-4 space-y-1"
                variants={containerVariants}
              >
                <motion.p 
                  className="text-lg font-medium"
                  variants={itemVariants}
                >
                  Instagram:
                </motion.p>
                <motion.p 
                  className="text-lg font-semibold"
                  variants={itemVariants}
                >
                  @valeriarodriguez.events
                </motion.p>
                
                <motion.p 
                  className="text-lg font-medium pt-2"
                  variants={itemVariants}
                >
                  Email:
                </motion.p>
                <motion.p 
                  className="text-lg font-semibold"
                  variants={itemVariants}
                >
                  info@valeriarodriguez.com
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </motion.section>
  );
};