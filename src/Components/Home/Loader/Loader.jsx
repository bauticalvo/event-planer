import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background text-light flex items-center justify-center z-[9999]">
      <motion.h1
        className="text-4xl md:text-6xl font-bold tracking-wide font-chillax"
        initial={{ opacity: 0.2, scale: 0.95 }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.95, 1, 0.95] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img 
          src="/logos/logo_vr.svg"
          alt="Loading..."
          className="w-32 md:w-48 h-auto object-contain"
        />
      </motion.h1>
    </div>
  );
};
