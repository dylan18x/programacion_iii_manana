interface Props {
  pollen: number;
  onAdd: () => void;
}

export default function BeeChild({ pollen, onAdd }: Props) {
  return (
    <div style={{ border: "1px solid orange", padding: "10px" }}>
      <h4>Soy el componente Hijo</h4>
      <p>Polen recibido del padre: {pollen}</p>
      <button onClick={onAdd}>Pedir al padre que sume +10</button>
    </div>
  );
}