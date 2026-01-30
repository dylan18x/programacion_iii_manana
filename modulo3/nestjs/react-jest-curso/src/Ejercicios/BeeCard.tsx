interface Props {
  nombre: string;
  puntos: number;
  color:string;
  estaAbierto: boolean;
}

export default function BeeCard({ nombre, puntos,color,estaAbierto}: Props) {
  return (
    <div style={{ border: "1px solid blue" }}>
      <p>Abeja: {nombre}</p>
      <p>Puntos: {puntos}</p>
      <p>Color: {color}</p>
      <p>Estado: {estaAbierto?"Abierto":"Cerrado"}</p>
    </div>
  );
}