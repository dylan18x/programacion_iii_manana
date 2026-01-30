interface Props {
  onAccion: () => void;
  etiqueta: string;
}

export default function BeeButton({ onAccion, etiqueta }: Props) {
  return (
    <button onClick={onAccion}>
      {etiqueta}
    </button>
  );
}