import { useState } from "react";
import { motion } from "framer-motion";
import Cover from "./components/Cover";
import Brides from "./components/Brides";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="min-h-screen w-full bg-color-cream-300 lg:px-10 overflow-hidden">
      <div className="relative w-full md:max-w-md md:mx-auto md:shadow-2xl h-dvh overflow-y-auto bg-color-brown-300 max-w-6xl justify-center">
        {!isOpen ? (
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
            className="w-full z-50"
          >
            <Cover onOpen={handleOpen} />
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full md:max-w-md md:mx-auto md:shadow-2xl h-dvh overflow-y-auto bg-wedding-cream text-wedding-brown-dark snap-y snap-mandatory scroll-smooth select-none scrollbar-none flex flex-col @container"
          >
            {/* Header Wave Border (Fixed at the absolute top of the scroll container) */}

            {/* Javanese Gunungan Background Watermark */}
            <div
              className="absolute inset-0 w-[60%] h-[60%] m-auto bg-contain bg-center bg-no-repeat opacity-[0.06] mix-blend-multiply pointer-events-none z-0"
              style={{ backgroundImage: `url()` }}
            />

            {/* Combined Snapping Sections */}
            <div className="w-full h-full">
              <Brides />
            </div>
          </motion.main>
        )}
      </div>
    </div>
  );
}

export default App;
