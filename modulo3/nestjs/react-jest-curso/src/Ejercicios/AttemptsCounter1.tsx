import { useRef } from "react";

interface Props {
  attemptSignal: number;
}

export default function AttempsCounter({ attemptSignal }: Props) {
  const intentos = useRef(0);

  if (attemptSignal > intentos.current) {
    intentos.current += 1;
  }

  return (
    <div>
      <p>Intentos realizados: {intentos.current}</p>
    </div>
  );
}
