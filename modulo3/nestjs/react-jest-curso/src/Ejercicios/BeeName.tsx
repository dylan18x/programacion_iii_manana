import { useState } from "react";

export default function BeeName() {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Nombre de la abeja: {name}</h3>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        placeholder="Escribe aquí..." 
      />
    </div>
  );
}