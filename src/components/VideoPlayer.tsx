import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Volume2, VolumeX, Play, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  // Handle scroll-based video playback
  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
        setShowPlayButton(true);
      });
      setIsPlaying(true);
      setShowPlayButton(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView]);

  // Handle unmute - restart video when unmuted
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      setShowPlayButton(false);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen) {
        // iOS Safari support
        (videoRef.current as HTMLVideoElement & { webkitEnterFullscreen: () => void }).webkitEnterFullscreen();
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Video container with rounded corners */}
      <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-2xl bg-black">
        {/* Decorative gradient border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 p-[3px] -z-10" />
        
        <div className="relative rounded-3xl overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="w-full aspect-video object-cover"
            onClick={handlePlayClick}
          />

          {/* Play button overlay */}
          {showPlayButton && !isPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/30"
            >
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                <Play className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" />
              </div>
            </motion.button>
          )}

          {/* Sound toggle button */}
          {isPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={handleToggleMute}
              className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white transition-all duration-300 active:scale-90 border border-white/20"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </motion.button>
          )}

          {/* Tap to unmute hint */}
          {isPlaying && isMuted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs border border-white/20"
            >
              Tap sound icon to unmute
            </motion.div>
          )}
        </div>
      </div>

      {/* Video title OR Fullscreen button based on mute state */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {!isMuted && isPlaying ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleFullscreen}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 active:scale-95"
          >
            <Maximize className="w-4 h-4" />
            Watch Fullscreen
          </motion.button>
        ) : (
          <p className="text-gray-500 text-sm">
            Watch the gameplay trailer
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default VideoPlayer;
