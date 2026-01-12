import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';

interface GameShowcaseProps {
  title: string;
  subtitle: string;
  coverImage: string;
  videoSrc: string;
  accentColor?: string;
  index: number;
}

const GameShowcase: React.FC<GameShowcaseProps> = ({
  title,
  subtitle,
  coverImage,
  videoSrc,
  accentColor = '#f97316',
  index,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.6 });
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle scroll-based video visibility
  useEffect(() => {
    if (isInView) {
      // Start showing video after a brief delay
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowVideo(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isInView]);

  // Auto-play when video becomes visible
  useEffect(() => {
    if (showVideo && videoRef.current && isLoaded) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, that's okay
      });
    }
  }, [showVideo, isLoaded]);

  // Handle unmute - restart video when unmuted
  const handleToggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        // Unmuting - restart the video
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full px-4 py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Background gradient orb */}
      <div
        className="absolute inset-0 opacity-30 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor}40, transparent 70%)`,
        }}
      />

      {/* Phone Frame */}
      <div className="relative mx-auto w-full max-w-[280px]">
        {/* Phone mockup container */}
        <div className="relative rounded-[2.5rem] bg-gray-900 p-2 phone-shadow-lg">
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2rem] bg-black aspect-[9/19.5]">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />

            {/* Cover Image */}
            <motion.div
              className="absolute inset-0 z-10"
              animate={{
                opacity: showVideo ? 0 : 1,
                scale: showVideo ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Play indicator overlay */}
              {!showVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <motion.div
                    className="w-16 h-16 rounded-full glass flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </motion.div>
                </div>
              )}
            </motion.div>

            {/* Video */}
            <motion.div
              className="absolute inset-0 z-5"
              animate={{
                opacity: showVideo ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onLoadedData={() => setIsLoaded(true)}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Sound toggle button */}
            {showVideo && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={handleToggleMute}
                className="absolute bottom-6 right-3 z-20 p-3 rounded-full glass-dark text-white transition-all duration-300 active:scale-90"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </motion.button>
            )}

            {/* Bottom home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full z-30" />
          </div>
        </div>

        {/* Reflection effect */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[200px] h-20 blur-2xl opacity-20 rounded-full bg-gradient-to-b from-gray-400 to-transparent" />
      </div>

      {/* Title and subtitle below phone */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm px-4">{subtitle}</p>
      </motion.div>
    </motion.div>
  );
};

export default GameShowcase;
