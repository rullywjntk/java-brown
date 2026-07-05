import { motion } from "framer-motion";
import weddingData from "../data/weddingData.json";

function Brides() {
  return (
    <div className="w-full h-dvh flex flex-col justify-between py-12 px-6 snap-start shrink-0 relative z-10">
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
    </div>
  );
}
export default Brides;
