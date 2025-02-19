import { useState } from "react";
import Image from "./components/Image";
import bg from "./assets/Ice-bg.jpg";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="relative h-screen  w-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Image className="relative z-10 w-full" />
      </div>
      
    </>
  );
}

export default App;
