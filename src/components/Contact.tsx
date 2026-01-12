import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = "+15551234567"; // Placeholder, needs user to fill
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section id="contact" className="py-24 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Ready to start your adventure? Contact us directly on WhatsApp for orders and inquiries.
          </p>
          
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-8 py-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl transition-all shadow-lg shadow-green-500/20 group"
          >
            <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
            <div className="text-left">
              <div className="text-sm font-medium text-green-50 uppercase tracking-wider">Chat on WhatsApp</div>
              <div className="text-2xl font-bold">+1 (555) 123-4567</div>
            </div>
          </motion.a>

          <div className="mt-12 flex justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>Direct Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available Now</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
