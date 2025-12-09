import { useState } from 'react';

export default function AreaTriangulo(props:any) {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const area = (base * altura) / 2;
    props.onLogin({ area });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" onChange={e => setBase(Number(e.target.value))} /><br/>
      <input type="number" onChange={e => setAltura(Number(e.target.value))} /><br/>
      <button type="submit">Calcular</button>
    </form>
  );
}