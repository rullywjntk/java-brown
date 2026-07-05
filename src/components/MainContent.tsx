import { motion, useScroll } from "framer-motion";
import ChineseClouds from "../components/ui/ChineseCloud";
import bannerImg from "../assets/banner/banner.png";
import wayangImg from "../assets/wayang_1.png";
import gununganImg from "../assets/gunungan1.png";
import { useRef } from "react";
import Quotes from "./Quotes";
import Brides from "./Brides";

function MainContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useScroll({
    container: containerRef,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
      className="relative w-full md:max-w-md md:mx-auto md:shadow-2xl h-dvh flex flex-col items-center justify-between overflow-hidden"
    >
      {/* top banner */}
      <div className="absolute top-0 rotate-270 translate-x-[6%] translate-y-[-35%] z-20">
        <img
          src={bannerImg}
          alt="banner"
          className="w-full max-w-full h-auto z-20"
        />
      </div>

      <ChineseClouds />

      {/* Bottom banner */}
      <div className="absolute bottom-0 rotate-90 w-[180%] translate-x-[-25%] translate-y-[36%] z-30">
        <img
          src={bannerImg}
          alt="banner"
          className="w-full max-w-full h-auto"
        />
      </div>

      {/* Bottom banner 2*/}
      <div className="absolute bottom-0 rotate-90 w-[150%] translate-x-[-8%] translate-y-[30%] z-10">
        <img
          src={bannerImg}
          alt="banner"
          className="w-full max-w-full h-auto"
        />
      </div>

      {/* Wayang banner 2*/}
      <motion.div
        initial={{ opacity: 0, rotateZ: -4 }}
        animate={{ opacity: 1, rotateZ: 4 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 2.5, ease: [0.25, 1, 0.5, 1], delay: 1.8 },
          rotateZ: {
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 2.0,
          },
        }}
        className="absolute bottom-0 w-[30%] translate-x-[120%] translate-y-[-15%] z-10"
      >
        <img
          src={wayangImg}
          alt="banner"
          className="w-full max-w-full h-auto"
        />
      </motion.div>

      {/* Wayang banner 2*/}
      <div className="absolute bottom-0 w-[30%] translate-x-[160%] translate-y-[-30%] z-0">
        <img
          src={gununganImg}
          alt="banner"
          className="w-full max-w-full h-auto"
        />
      </div>

      {/* Wayang banner 1*/}
      <motion.div
        initial={{ opacity: 0, rotateZ: -4 }}
        animate={{ opacity: 1, rotateZ: 4 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 2.0, ease: [0.25, 1, 0.5, 1], delay: 2.0 },
          rotateZ: {
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 2.0,
          },
        }}
        className="absolute bottom-0 w-[40%] translate-x-[-90%] translate-y-[5%] z-20"
      >
        <img
          src={wayangImg}
          alt="banner"
          className="w-full max-w-full h-auto scale-x-[-1]"
        />
      </motion.div>

      {/* Wayang banner 1*/}
      <div className="absolute bottom-0 w-[40%] translate-x-[-120%] translate-y-[-5%] z-10">
        <img
          src={gununganImg}
          alt="banner"
          className="w-full max-w-full h-auto"
        />
      </div>
      <div
        ref={containerRef}
        className="relative z-70 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <section className="h-screen w-full snap-start snap-always">
          <Quotes />
        </section>
        <section className="h-screen w-full snap-start snap-always">
          <Brides />
        </section>
      </div>
    </motion.div>
  );
}

export default MainContent;
