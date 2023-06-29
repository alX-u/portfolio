import { useState } from "react";
import MyNavbar from "./components/my_navbar";
import "./css/my_navbar.css";
import "./css/my_content.css";
import MyContent from "./components/my_content";

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
