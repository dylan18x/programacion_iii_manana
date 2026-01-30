import { useState, useMemo } from "react";

export default function BeeWeeklyPollen() {
  // Estado con 5 días (Lunes a Viernes)
  const [semana, setSemana] = useState([0, 0, 0, 0, 0]);

  // useMemo para sumar el total del array
  const totalSemanal = useMemo(() => {
    console.log("Sumando polen de la semana...");
    // .reduce suma todos los números del array
    return semana.reduce((acc, valorActual) => acc + valorActual, 0);
  }, [semana]);

  const updateDay = (index: number, value: string) => {
    // 1. Convertimos el texto del input a número
    const newValue = Number(value);

    // 2. CREAMOS UNA COPIA del array (Muy importante para React)
    const nuevaSemana = [...semana];

    // 3. Modificamos la copia en la posición indicada
    nuevaSemana[index] = newValue;

    // 4. Guardamos la copia en el estado
    setSemana(nuevaSemana);
  };

  return (
    <div>
      <h2>Registro de Polen Semanal</h2>
      
      {/* Creamos 5 inputs usando un map sencillo */}
      {semana.map((pollen, i) => (
        <div key={i}>
          <label>Día {i + 1}: </label>
          <input 
            type="number" 
            value={pollen} 
            onChange={(e) => updateDay(i, e.target.value)} 
          />
        </div>
      ))}

      <h3>Total de la semana: {totalSemanal} mg</h3>
    </div>
  );
}