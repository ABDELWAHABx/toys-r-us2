import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gray-950 flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-600/20 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 font-semibold text-sm tracking-wide">THE ULTIMATE TOY</span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Duck <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Savior</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
              Embark on an epic journey. An innovative fusion of action and imagination awaits. The ducks need a hero—are you ready?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollDown}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl shadow-lg shadow-primary-600/25 transition-all"
              >
                Watch Trailer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl border border-gray-700 transition-all"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>

          {/* Cover Image / Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative"
          >
            <div className="relative z-10 group aspect-[4/5] w-full max-w-md mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="relative z-20 text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <span className="text-white font-bold text-4xl">DS</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Duck Savior</h3>
                <p className="text-gray-400">Ultimate Edition</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-500/20 blur-3xl rounded-full"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 z-20 bg-gray-800/90 backdrop-blur-md p-4 rounded-xl border border-gray-700 shadow-xl hidden lg:block"
            >
              <div className="text-primary-400 font-bold text-lg">New Release</div>
              <div className="text-xs text-gray-400">Available Now</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollDown}
          className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 border border-gray-700 transition-colors animate-bounce"
        >
          <ChevronDown className="text-white" size={24} />
        </button>
      </motion.div>
    </section>
  );
}
