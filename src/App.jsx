import { useState } from "react";
import MyNavbar from "./components/MyNavbar";
import "./css/index.css";
import MyContent from "./components/MyContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        {/* Aquí va la navbar */}
        <MyNavbar />
      </header>
      <div className="presentation">
        {/* Aquí irá el contenido de la página */}
        <MyContent />
      </div>
    </>
  );
}

export default App;
