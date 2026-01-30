import { useState, useMemo } from "react";

export default function PotionCalc() {
  const [honey, setHoney] = useState(0);
  const [theme, setTheme] = useState("light");

  const potions = useMemo(() => {
    console.log("Calculando pociones...");
    return Math.floor(honey / 50);
  }, [honey]);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#ccc" }}>
      <p>Miel: {honey}</p>
      <p>Puedes comprar: {potions} pociones</p>
      <button onClick={() => setHoney(honey + 10)}>Añadir 10 Miel</button>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Cambiar Tema
      </button>
    </div>
  );
}