import { motion } from "framer-motion";

function Quotes() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Top Greeting Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        className="text-center space-y-1 mt-6"
      >
        <p className="font-sans text-xs leading-relaxed text-wayang-brown-600 italic max-w-70 mx-auto">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram di
          sampingnya."
        </p>
        <h2 className="font-serif text-xs font-semibold italic uppercase  text-wayang-gold-200 tracking-[0.2em]">
          - (QS. Ar-Rum: 21)
        </h2>
      </motion.div>
    </div>
  );
}

export default Quotes;
