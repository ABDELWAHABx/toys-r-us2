import { motion } from 'framer-motion';
import { Heart, MessageCircle, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  DuckIcon,
  PoliceBadgeIcon,
  CriminalIcon,
  ToyGunIcon,
  StarIcon,
  HandcuffsIcon,
  TargetIcon,
  ShieldIcon,
} from './components/GameIcons';
import CardStack from './components/CardStack';
import VideoPlayer from './components/VideoPlayer';

const TITLE_APPEAR_DURATION = 0.6;
const ICONS_START_DELAY = 0.8;
const TEXT_APPEAR_DELAY = 1.6;
const CONTENT_MOVE_DELAY = 2.2;
const SCROLL_APPEAR_DELAY = 2.8;

const floatingIcons = [
  { Icon: DuckIcon, color: '#FFD700', delay: 0, endX: -160, endY: -90, rotate: -15, size: 36 },
  { Icon: ShieldIcon, color: '#4ECDC4', delay: 0.15, endX: -180, endY: -40, rotate: -10, size: 22 },
  { Icon: StarIcon, color: '#FF6B35', delay: 0.05, endX: -80, endY: -120, rotate: 20, size: 18 },
  { Icon: StarIcon, color: '#F1C40F', delay: 0.2, endX: 50, endY: -130, rotate: 15, size: 16 },
  { Icon: PoliceBadgeIcon, color: '#4169E1', delay: 0.1, endX: 160, endY: -100, rotate: 12, size: 32 },
  { Icon: CriminalIcon, color: '#1a1a1a', delay: 0.12, endX: 110, endY: -80, rotate: -8, size: 28 },
  { Icon: TargetIcon, color: '#4169E1', delay: 0.18, endX: 175, endY: -20, rotate: 0, size: 26 },
  { Icon: HandcuffsIcon, color: '#A0A0A0', delay: 0.25, endX: 165, endY: 40, rotate: 15, size: 28 },
  { Icon: ToyGunIcon, color: '#FF7F50', delay: 0.22, endX: -175, endY: 20, rotate: -35, size: 32 },
];

function App() {
  const [contentMoved, setContentMoved] = useState(false);
  const whatsappNumber = '+20 11 11541756';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  useEffect(() => {
    const timer = setTimeout(() => setContentMoved(true), CONTENT_MOVE_DELAY * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-soft text-gray-900 selection:bg-amber-400 selection:text-gray-900 overflow-x-hidden">
      {/* Decorative background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-br from-yellow-200/50 to-orange-200/50 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-60 h-60 bg-gradient-to-br from-orange-200/40 to-yellow-200/40 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Animated content container - moves up after animations */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: contentMoved ? -30 : 0 }}
          transition={{ delay: CONTENT_MOVE_DELAY, duration: 0.8, ease: 'easeOut' }}
        >
          {/* Title container with spreading icons */}
          <div className="relative flex items-center justify-center">
            {/* Floating icons that spread from behind the title */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className="absolute z-20"
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0, 
                  opacity: 0,
                  rotate: 0 
                }}
                animate={{ 
                  x: item.endX, 
                  y: item.endY, 
                  scale: 1, 
                  opacity: 1,
                  rotate: item.rotate 
                }}
                transition={{
                  delay: ICONS_START_DELAY + item.delay,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
              >
                {/* Continuous floating animation */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [item.rotate, item.rotate + 5, item.rotate],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: item.delay,
                  }}
                >
                  <item.Icon 
                    className="drop-shadow-lg"
                    style={{ 
                      width: item.size, 
                      height: item.size, 
                      color: item.color 
                    }} 
                  />
                </motion.div>
              </motion.div>
            ))}

            {/* Main title image */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: TITLE_APPEAR_DURATION, ease: 'easeOut' }}
            >
              {/* Glow effect behind title */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-yellow-400/30 blur-3xl scale-150" />
              
              {/* Title image */}
              <motion.img
                src="/title.png"
                alt="Duck Savior"
                className="relative w-64 sm:w-80 md:w-96 h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-gray-500 text-lg mt-8 mb-6 px-4 text-center max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: TEXT_APPEAR_DELAY }}
          >
            An exciting rescue adventure game for kids!
          </motion.p>

          {/* Features pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: TEXT_APPEAR_DELAY + 0.2 }}
          >
            {['Fun for Kids', 'Action-Packed', 'Family Friendly'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator with glowing rotating colors */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: SCROLL_APPEAR_DELAY }}
        >
          <motion.span
            className="text-xs uppercase tracking-widest bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #f97316, #ec4899, #8b5cf6, #3b82f6, #f97316)',
              backgroundSize: '200% auto',
            }}
            animate={{ backgroundPosition: ['0% center', '200% center'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            className="relative"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {/* Glow effect with rotating colors */}
            <motion.div
              className="absolute inset-0 rounded-full blur-md"
              style={{ width: 20, height: 20, margin: 2.5 }}
              animate={{
                background: [
                  'linear-gradient(90deg, #f97316, #ec4899)',
                  'linear-gradient(90deg, #ec4899, #8b5cf6)',
                  'linear-gradient(90deg, #8b5cf6, #3b82f6)',
                  'linear-gradient(90deg, #3b82f6, #f97316)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <ArrowDown className="w-5 h-5 relative z-10" style={{ color: 'transparent' }} />
          </motion.div>
        </motion.div>
      </header>

      {/* Card Stack Section */}
      <section className="relative py-16">
        <CardStack
          frontCover="/the game cover.png"
          backCover="/the backcover.png"
        />
      </section>

      {/* Video Section */}
      <section className="relative py-16">
        <motion.div
          className="text-center mb-8 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
            See It In Action
          </h2>
          <p className="text-xl font-bold text-gray-900">
            Gameplay Video
          </p>
        </motion.div>

        <VideoPlayer videoSrc="/video.mp4" />
      </section>

      {/* WhatsApp Contact Section */}
      <section className="relative py-16 px-6">
        <motion.div
          className="max-w-sm mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Glass card */}
          <div className="glass rounded-3xl p-8 text-center relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50" />
            
            <div className="relative z-10">
              {/* WhatsApp icon */}
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-8 h-8 text-white" fill="white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get In Touch</h3>
              <p className="text-gray-500 text-sm mb-6">
                Questions about Duck Savior? Chat with us!
              </p>
              
              {/* WhatsApp button */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 px-6 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-base shadow-lg shadow-green-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </motion.a>
              
              {/* Phone number display */}
              <p className="mt-4 text-sm text-gray-400">
                {whatsappNumber}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 text-center safe-bottom">
        <div className="flex items-center justify-center gap-2 mb-4">
          <DuckIcon className="w-6 h-6" style={{ color: '#FFD700' }} />
          <span className="font-bold text-gray-900">Duck Savior</span>
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Duck Savior. Made with{' '}
          <Heart className="w-3 h-3 inline text-red-400" fill="currentColor" /> for children.
        </p>
      </footer>
    </div>
  );
}

export default App;
