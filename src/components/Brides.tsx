import { motion } from "framer-motion";
import weddingData from "../data/weddingData.json";

function Brides() {
  return (
    <div className="w-full h-[100dvh] flex flex-col justify-between py-12 px-6 snap-start flex-shrink-0 relative z-10">
      {/* Profiles Content */}
      <div className="flex flex-col items-center justify-center my-auto py-2 space-y-3.5 w-full">
        {/* Groom Profile */}
        <div className="flex flex-col items-center text-center space-y-1.5">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
            className="relative w-18 h-18 rounded-full overflow-hidden border-2 border-wedding-gold shadow-sm"
          >
            <img
              src=""
              alt={weddingData.couple.groom.shortName}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="space-y-0.5">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="font-serif text-base font-bold tracking-wide text-wedding-brown-dark"
            >
              {weddingData.couple.groom.fullName}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ duration: 1.4, delay: 0.8 }}
              className="font-sans text-xs tracking-wide text-wedding-brown-soft"
            >
              {weddingData.couple.groom.parents}
            </motion.p>
          </div>
        </div>

        {/* Traditional Center Divider */}
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-wedding-gold/60 text-xs w-full py-0.5"
        >
          <span className="w-8 h-[1px] bg-wedding-gold/20"></span>
          <span className="font-cursive text-xl text-wedding-gold">&</span>
          <span className="w-8 h-[1px] bg-wedding-gold/20"></span>
        </motion.div>

        {/* Bride Profile */}
        <div className="flex flex-col items-center text-center space-y-1.5">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1], delay: 1.0 }}
            className="relative w-18 h-18 rounded-full overflow-hidden border-2 border-wedding-gold shadow-sm"
          >
            <img
              src=""
              alt={weddingData.couple.bride.shortName}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="space-y-0.5">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ duration: 1.4, delay: 1.2 }}
              className="font-serif text-base font-bold tracking-wide text-wedding-brown-dark"
            >
              {weddingData.couple.bride.fullName}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ duration: 1.4, delay: 1.4 }}
              className="font-sans text-xs tracking-wide text-wedding-brown-soft"
            >
              {weddingData.couple.bride.parents}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Footer Area */}
      <div className="space-y-4 mb-2 flex flex-col items-center">
        {/* Footer Signature Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 1.8, delay: 1.6 }}
          className="text-center"
        >
          <p className="font-cursive text-lg text-wedding-gold">
            Menciptakan Tenteram & Kasih Sayang
          </p>
        </motion.div>

        {/* Javanese Tribal/Ornament Divider inside this viewport */}
        <div className="w-full flex justify-center py-2 relative z-10 pointer-events-none">
          <svg
            className="w-48 h-8 text-wedding-gold"
            viewBox="0 0 200 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center Javanese Gunungan Crest Miniature */}
            <path
              d="M100 2 L106 14 L102 14 L104 22 L96 22 L98 14 L94 14 Z"
              fill="currentColor"
            />
            <circle cx="100" cy="26" r="1.5" fill="currentColor" />

            {/* Left wing spiral */}
            <path
              d="M15 15 C30 5, 55 25, 75 15 C82 11, 88 18, 92 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M35 13 C45 8, 60 20, 70 13"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* Right wing spiral */}
            <path
              d="M185 15 C170 5, 145 25, 125 15 C118 11, 112 18, 108 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M165 13 C155 8, 140 20, 130 13"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Brides;
