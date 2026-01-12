import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  videoUrl: string;
  coverImage: string;
}

export default function GameCard({ title, description, videoUrl, coverImage }: GameCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5, margin: "0px 0px -10% 0px" });
  const [isMuted, setIsMuted] = useState(true);
  
  // Handle autoplay on scroll
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.muted = isMuted;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, isMuted]);

  const handleInteraction = () => {
    if (videoRef.current) {
      if (isMuted) {
        // Unmute and Restart
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play();
      } else {
        setIsMuted(true);
        videoRef.current.muted = true;
      }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[70vh] md:h-[85vh] mb-6 md:mb-12 rounded-[2rem] overflow-hidden shadow-2xl bg-white transform transition-transform"
    >
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          poster={coverImage}
          loop
          playsInline
          muted={isMuted}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Overlay Content */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 cursor-pointer"
          onClick={handleInteraction}
        >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white transform transition-all duration-300 active:scale-95">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h3>
                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </div>
                </div>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed font-medium opacity-90">{description}</p>
                
                <div className="mt-4 flex items-center gap-2">
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${isMuted ? 'w-2 bg-gray-400' : 'w-12 bg-primary-400'}`}></div>
                    <span className="text-xs uppercase tracking-wider font-bold text-gray-300">
                        {isMuted ? 'Tap to unmute & restart' : 'Sound On'}
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
  );
}
