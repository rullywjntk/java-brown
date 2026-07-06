import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Cover from "./components/Cover";
import MainContent from "./components/MainContent";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="min-h-screen w-full bg-color-cream-300 lg:px-10 overflow-hidden">
      <div className="relative w-full md:max-w-md md:mx-auto md:shadow-2xl h-dvh overflow-y-auto bg-wayang-cream-50 max-w-6xl justify-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <Cover key="cover" onOpen={handleOpen} />
          ) : (
            <MainContent key="main-content" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
