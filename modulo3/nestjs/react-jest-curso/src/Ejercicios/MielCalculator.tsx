import { useState, useMemo } from "react";

export default function MielCalculator() {
  const [mielAbeja1, setMielAbeja1] = useState(10);
  const [mielAbeja2, setMielAbeja2] = useState(20);
  const [color, setColor] = useState("white");

  // El useMemo "envuelve" la operación matemática
  const totalMiel = useMemo(() => {
    console.log("--- CALCULANDO SUMA PESADA ---");
    return mielAbeja1 + mielAbeja2;
  }, [mielAbeja1, mielAbeja2]); // Solo se repite si cambia alguna miel

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <h2>Total Miel: {totalMiel}</h2>
      
      <button onClick={() => setMielAbeja1(mielAbeja1 + 10)}>
        + Miel Abeja 1
      </button>
      
      <button onClick={() => setColor(color === "white" ? "yellow" : "white")}>
        Cambiar Color (No debería recalcular la suma)
      </button>
      
      <p>Mira la consola del navegador para ver cuándo se hace la suma.</p>
    </div>
  );
}