import { useCallback, useState } from "react";

export default function BeeCalculo() {
  const [num, setNum] = useState(0);

  // En lugar de "return n + 2", la función cambia el estado.
  // Esto es lo que pasarías a un hijo para que el hijo pueda cambiar datos del padre.
  const aumentarDos = useCallback(() => {
    setNum((prev) => prev + 2);
  }, []); 

  return (
    <div>
      <h3>Número actual: {num}</h3>
      <button onClick={aumentarDos}>Sumar 2 (Callback)</button>
    </div>
  );
}