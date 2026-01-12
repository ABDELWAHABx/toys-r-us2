import { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { RotateCw } from 'lucide-react';

interface CardStackProps {
  frontCover: string;
  backCover: string;
}

const CardStack: React.FC<CardStackProps> = ({ frontCover, backCover }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSwipe = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      setIsFlipped(!isFlipped);
    }
  };

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full px-4">
      {/* Section title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
          Game Box
        </h2>
        <p className="text-xl font-bold text-gray-900">
          {isFlipped ? 'Back Cover' : 'Front Cover'}
        </p>
      </motion.div>

      {/* 3D Flip Card container */}
      <div 
        className="relative max-w-[320px] mx-auto cursor-pointer" 
        style={{ perspective: '1000px' }}
        onClick={toggleCard}
      >
        {/* Card glow effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl blur-xl"
          animate={{ opacity: isFlipped ? 0.2 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Flip container */}
        <motion.div
          className="relative w-full touch-pan-y"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1]
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleSwipe}
        >
          {/* Front Face */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <img
              src={frontCover}
              alt="Front Cover"
              className="w-full h-auto object-cover rounded-2xl"
              draggable={false}
            />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
          </div>

          {/* Back Face */}
          <div
            className="absolute top-0 left-0 w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <img
              src={backCover}
              alt="Back Cover"
              className="w-full h-auto object-cover rounded-2xl"
              draggable={false}
            />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Flip indicator badge */}
        <motion.div
          className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
          animate={{ rotate: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <RotateCw className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Navigation hint */}
      <motion.div
        className="flex items-center justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Dots indicator */}
        <div className="flex items-center gap-2">
          <motion.div
            className={`w-2 h-2 rounded-full transition-colors ${
              !isFlipped ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            animate={{ scale: !isFlipped ? 1.2 : 1 }}
          />
          <motion.div
            className={`w-2 h-2 rounded-full transition-colors ${
              isFlipped ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            animate={{ scale: isFlipped ? 1.2 : 1 }}
          />
        </div>
      </motion.div>

      {/* Swipe hint text */}
      <motion.p
        className="text-center text-xs text-gray-400 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Tap or swipe to flip
      </motion.p>
    </div>
  );
};

export default CardStack;
