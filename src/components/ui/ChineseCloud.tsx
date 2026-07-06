import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import chineseCloud from "../../assets/chinese_cloud4.png";

const CLOUD_FILTER =
  "grayscale(1) brightness(0) invert(40%) sepia(30%) saturate(600%) hue-rotate(15deg) brightness(90%) contrast(90%)";

const cloudVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 10 },
  exit: { opacity: 0 },
};

const cloudTransition = (delay = 1.8) => ({
  opacity: {
    duration: 2.0,
    ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    delay,
  },
  x: {
    duration: 2.0,
    ease: "easeInOut" as Easing,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
});

export default function ChineseClouds() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Cloud cluster — bottom-left, just above the footer wave */}
      {/* Cloud 1: leftmost */}
      <motion.div
        variants={cloudVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={cloudTransition(1.8)}
        className="absolute top-16 left-0 w-[12%]"
      >
        <img src={chineseCloud} alt="" style={{ filter: CLOUD_FILTER }} />
      </motion.div>

      {/* Cloud 2: offset right & slightly up */}
      <motion.div
        variants={cloudVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={cloudTransition(2.0)}
        className="absolute top-24 left-[8%] w-[10%]"
      >
        <img src={chineseCloud} alt="" style={{ filter: CLOUD_FILTER }} />
      </motion.div>

      {/* Cloud 3: further right, back down */}
      <motion.div
        variants={cloudVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={cloudTransition(2.2)}
        className="absolute top-16 left-[16%] w-[9%]"
      >
        <img src={chineseCloud} alt="" style={{ filter: CLOUD_FILTER }} />
      </motion.div>
    </div>
  );
}
