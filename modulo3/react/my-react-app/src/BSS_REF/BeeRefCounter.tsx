import { useState, useRef } from "react";

export default function BeeRefCounter() {
  // El valor vive en .current y NO refresca la pantalla
  const clicks = useRef(0);
  
  // El estado SÍ refresca la pantalla
  const [render, setRender] = useState(0);

  const incrementSilently = () => {
    clicks.current = clicks.current + 1;
    console.log("Valor interno de clicks:", clicks.current);
  };

  return (
    <div>
      <h2>Nivel 23: Entendiendo el Ref</h2>
      <p>Valor en pantalla (Ref): {clicks.current}</p>
      <p>Actualizaciones de pantalla: {render}</p>

      <button onClick={incrementSilently}>
        Sumar internamente (No refresca)
      </button>

      <button onClick={() => setRender(render + 1)}>
        Forzar actualización de pantalla
      </button>
    </div>
  );
}