import { useState, useCallback } from "react";

export default function BeeCallback() {
  const [pollen, setPollen] = useState(0);

  // Memorizamos la función. Solo se recreará si cambia 'pollen'.
  const resetPollen = useCallback(() => {
    setPollen(0);
  }, []); // El array vacío significa que la función es siempre la misma

  return (
    <div>
      <p>Pollen: {pollen}</p>
      <button onClick={() => setPollen(pollen + 1)}>Sumar</button>
      
      {/* Usamos la función memorizada */}
      <button onClick={resetPollen}>Resetear</button>
    </div>
  );
}