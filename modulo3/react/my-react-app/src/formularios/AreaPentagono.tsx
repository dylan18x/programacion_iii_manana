import { useState } from 'react';

export default function AreaPentagono() {
  const [perimetro, setPerimetro] = useState(0);
  const [apotema, setApotema] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const area = (perimetro*apotema)/2
    alert(`El area de un pentagono es: ${area}`,);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ingrese Perimetro:</h3>
      <input
        type="text"
        placeholder="Perimetro"
        value={perimetro}
        onChange={e => setPerimetro(Number(e.target.value))}
        /><br />

      <h3>Ingrese Apotema:</h3>
      <input
        type="text"
        placeholder="Apotema"
        value={apotema}
        onChange={e => setApotema(Number(e.target.value))}
      /><br />

      <button type="submit">Enviar</button>
    </form>
  );
}