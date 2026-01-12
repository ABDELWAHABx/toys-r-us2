import { motion } from 'framer-motion';

interface CoverGalleryProps {
  frontCover: string;
  backCover: string;
}

const CoverGallery: React.FC<CoverGalleryProps> = ({ frontCover, backCover }) => {
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
          Front & Back Cover
        </p>
      </motion.div>

      {/* Covers container */}
      <div className="flex flex-col gap-8 max-w-md mx-auto">
        {/* Front Cover */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40, rotateY: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="relative group">
            {/* Shadow/glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            
            {/* Cover image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={frontCover}
                alt="Duck Savior - Front Cover"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Label */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white rounded-full shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xs font-medium text-gray-600">Front</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Back Cover */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40, rotateY: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="relative group">
            {/* Shadow/glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            
            {/* Cover image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={backCover}
                alt="Duck Savior - Back Cover"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Label */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white rounded-full shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-xs font-medium text-gray-600">Back</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoverGallery;
