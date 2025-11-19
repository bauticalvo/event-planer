import { motion } from 'framer-motion';

export const InfoSection = () => {
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

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 128,
      opacity: 0.4,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-24 py-20 text-center space-y-12 bg-[var(--color-background)] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[var(--color-terracota)] to-transparent opacity-40"
        variants={lineVariants}
      />

      <motion.span 
        className="uppercase tracking-[0.5em] text-xs text-[var(--color-jade)] font-medium opacity-80"
        variants={itemVariants}
      >
        Valeria Rodríguez
      </motion.span>

      <motion.h1 
        className="text-4xl md:text-6xl 2xl:text-7xl font-serif text-[var(--color-text)] leading-tight max-w-5xl mx-auto"
        variants={itemVariants}
      >
        La arquitectura de un <br className="hidden lg:block" />
        <span className="italic text-[var(--color-jade)] font-serif">instante eterno.</span>
      </motion.h1>

      <motion.p 
        className="text-lg md:text-2xl font-light text-[var(--color-text-alt)] max-w-2xl leading-relaxed tracking-wide"
        variants={itemVariants}
      >
        Existe un universo donde la celebración trasciende lo tangible para convertirse en una obra de arte viva. 
        <br className="block my-6" />
        El verdadero lujo es la serenidad. La certeza absoluta de que cada emoción ha sido cuidada para no quedar solo en la memoria, sino grabada en la piel.
      </motion.p>
    </motion.section>
  );
};