import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="video-section" className="py-24 bg-black relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-primary-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience the Action</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Witness the gameplay and story unfold in our official trailer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/20 border border-gray-800"
        >
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover cursor-pointer bg-gray-900"
            onClick={togglePlay}
            onEnded={() => setIsPlaying(false)}
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Custom Play Button Overlay - only show when paused */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer"
              onClick={togglePlay}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center pl-1 shadow-xl group-hover:bg-primary-500 transition-colors"
              >
                <Play fill="white" className="text-white w-8 h-8" />
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
