import { useState } from "react";
import Cover from "./components/Cover";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="min-h-screen w-full bg-color-cream-300 lg:px-10 overflow-hidden">
      <div className="relative w-full md:max-w-md md:mx-auto md:shadow-2xl h-dvh overflow-y-auto bg-color-brown-300 max-w-6xl justify-center">
        <Cover onOpen={handleOpen} />
      </div>
    </div>
  );
}

export default App;
