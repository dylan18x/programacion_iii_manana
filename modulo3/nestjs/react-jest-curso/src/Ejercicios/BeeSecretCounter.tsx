import { useRef, useState } from "react";

export default function BeeSecretCounter() {
  // 1. Creamos la libreta secreta (el ref)
  const puntosRef = useRef(0);
  
  // 2. Un estado solo para forzar que se vea la realidad después
  const [ver, setVer] = useState(false);

  const ganarPunto = () => {
    // 3. Modificamos el valor interno. ¡La pantalla NO se mueve!
    puntosRef.current = puntosRef.current + 1;
    console.log("Puntos reales en la libreta:", puntosRef.current);
  };

  return (
    <div>
      <h2>Puntos en pantalla: {ver ? puntosRef.current : "??"}</h2>
      
      <button onClick={ganarPunto}>Ganar Punto en Secreto</button>
      
      <button onClick={() => setVer(true)}>
        Revelar Marcador Real
      </button>
    </div>
  );
}