import { useState } from "react";
import { motion } from "framer-motion";
import ChineseClouds from "../components/ui/ChineseCloud";
import bannerImg from "../assets/banner/banner.png";
import wayangImg from "../assets/wayang_1.png";
import gununganImg from "../assets/gunungan1.png";
import gununganLogo from "../assets/gunungan_logo.png";
import weddingData from "../data/weddingData.json";

interface CoverProps {
  onOpen: () => void;
}

function Cover({ onOpen }: CoverProps) {
  const [guestName] = useState<string>(() => {
    if (typeof window === "undefined") {
      return "";
    }
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get("to");
    return toParam ? decodeURIComponent(toParam) : "";
  });

  return (
    <motion.div
      key="cover"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.15 }}
      transition={{ duration: 4.0, ease: [0.4, 0, 0.2, 1] }}
      className="monochrome-wedding-filter relative w-full md:max-w-md md:max-auto md:shadow-2xl h-dvh flex flex-col items-center justify-between overflow-hidden bg-color-brown-300"
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

      {/* logo gunungan */}
      <div className="absolute text-center items-center justify-center flex flex-col w-full h-full">
        <div className="absolute top-0 w-[10%] translate-y-20 z-20">
          <img src={gununganLogo} alt="banner" />
        </div>
        <div className="absolute top-[20%] w-full z-20">
          <p className="font-serif tracking-widest text-wayang-gold-300 text-center text-1xl font-light">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="text-center items-center justify-center flex flex-col flex-1">
        <h1 className="text-wayang-gold-500 font-cursive text-center text-4xl font-light">
          {weddingData.couple.groom.shortName}
        </h1>
        <h1 className="text-wayang-gold-500 font-cursive text-center  text-2xl font-light">
          &amp;
        </h1>
        <h1 className="text-wayang-gold-500 font-cursive text-center text-4xl font-light">
          {weddingData.couple.bride.shortName}
        </h1>
        <h1 className="font-serif text-sm tracking-[0.2em] text-wayang-gold-300 text-center font-semibold mt-4 ">
          {weddingData.events.generalDate}
        </h1>

        {/* Guest Name Box Animation */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 2.0, ease: [0.25, 1, 0.5, 1], delay: 1.5 }}
          className="bg-wayang-white backdrop-blur-sm border border-wayang-gold-300 p-3 rounded-lg max-w-52.5 w-full shadow-sm my-2 z-50"
        >
          <p className="font-serif italic text-[10px] text-wayang-brown-300 mb-1">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <h2 className="font-serif text-sm font-semibold text-wayang-brown-600 min-h-5 border-b border-dashed border-wayang-brown-600 pb-1">
            {guestName || "Tamu Undangan"}
          </h2>
          <p className="font-sans text-[7.5px] tracking-wide text-wayang-brown-300 mt-1">
            *Mohon maaf bila ada kesalahan penulisan nama/gelar
          </p>
        </motion.div>

        {/* Buka Undangan Button Animation */}
        <motion.button
          onClick={onOpen}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 25, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            y: { duration: 2.0, ease: [0.25, 1, 0.5, 1], delay: 1.8 },
            opacity: { duration: 2.0, delay: 1.8 },
            scale: { duration: 0.2 },
          }}
          className="mt-3 px-5 py-2.5 bg-wayang-brown-600 text-wayang-cream-200 hover:bg-wayang-brown-400 transition-colors duration-300 font-sans text-xs tracking-wider uppercase rounded shadow flex items-center justify-center gap-1.5 cursor-pointer z-50"
        >
          <svg
            className="w-3.5 h-3.5 text-wayang-gold-200 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5"
            />
          </svg>
          <span>Buka</span>
        </motion.button>
      </div>

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
    </motion.div>
  );
}

export default Cover;
