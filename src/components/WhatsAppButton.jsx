import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappUrl =
  'https://wa.me/918179118725?text=Hi%20Felix%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20digital%20marketing%20work.';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Felix Thadi on WhatsApp"
      className="group fixed bottom-5 right-5 z-[70] flex min-h-12 min-w-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-[#1fbe5d] px-3 text-white shadow-[0_16px_40px_rgba(31,190,93,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#16a34a] hover:shadow-[0_20px_48px_rgba(31,190,93,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-7 sm:right-7 sm:px-4"
      initial={{ opacity: 0, scale: 0.86, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 220, damping: 18 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="absolute inset-0 rounded-full bg-[#1fbe5d] opacity-35 blur-xl transition-opacity duration-300 group-hover:opacity-55" />
      <FaWhatsapp size={23} className="relative" aria-hidden="true" />
      <span className="relative hidden text-[11px] font-black uppercase tracking-[0.12em] sm:inline">
        WhatsApp
      </span>
    </motion.a>
  );
}
