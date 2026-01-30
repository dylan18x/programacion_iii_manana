import { useRef, useState } from "react";

export default function BeeAttempts() {
  const [mensaje, setMensaje] = useState("Esperando...");
  // El Ref guarda el número pero NO actualiza la pantalla
  const contadorIntentos = useRef(0);

  const validar = () => {
    // Sumamos al Ref
    contadorIntentos.current = contadorIntentos.current + 1;
    
    // Solo cuando usamos setMensaje (useState) la pantalla cambia
    setMensaje("¡Botón pulsado!");
    
    console.log("Intentos totales en la 'bóveda':", contadorIntentos.current);
  };

  return (
    <div>
      <h3>Estado: {mensaje}</h3>
      <p>Mira la consola para ver el Ref</p>
      <button onClick={validar}>Validar</button>
      
      {/* Si mostramos el Ref aquí, verás que solo se actualiza cuando algo más (mensaje) cambia */}
      <p>Intentos acumulados (Ref): {contadorIntentos.current}</p>
    </div>
  );
}