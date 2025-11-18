import { motion, AnimatePresence } from 'framer-motion';

export const PageTransition = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Capa negra */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-full bg-primary/80 backdrop-blur-2xl"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
          />
         
        </div>
      )}
    </AnimatePresence>
  );
};
