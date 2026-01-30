interface Props {
  mensaje: string;
}

export default function BeeDisplay({ mensaje }: Props) {
  return (
    <div>
      <h1>El padre dice: {mensaje}</h1>
    </div>
  );
}