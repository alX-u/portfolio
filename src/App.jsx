import { useState } from "react";
import MyNavbar from "./components/MyNavbar";
import "./css/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <header>
        <MyNavbar />
      </header>
      <div className="content">
        {/* Aquí irá el contenido de la página */}
        <p>Hola</p>
      </div>
    </div>
  );
}

export default App;
