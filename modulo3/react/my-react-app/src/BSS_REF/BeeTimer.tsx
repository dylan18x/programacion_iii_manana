import { useRef } from "react";

export default function BeeTimer() {
  // Guardamos el tiempo en un Ref para que no refresque la pantalla
  const startTime = useRef(0);

  const startHarvest = () => {
    startTime.current = Date.now();
    console.log("Cosecha iniciada en:", startTime.current);
  };

  const endHarvest = () => {
    if (startTime.current === 0) {
      alert("¡Primero debes iniciar la cosecha!");
      return;
    }

    const endTime = Date.now();
    // Calculamos la diferencia y dividimos para 1000 para tener segundos
    const seconds = (endTime - startTime.current) / 1000;

    alert(`Has cosechado durante ${seconds.toFixed(2)} segundos`);
    
    // Reseteamos el reloj
    startTime.current = 0;
  };

  return (
    <div>
      <h2>Reloj de Cosecha</h2>
      <button onClick={startHarvest}>Iniciar Cosecha</button>
      <button onClick={endHarvest}>Finalizar y Ver Tiempo</button>
    </div>
  );
}