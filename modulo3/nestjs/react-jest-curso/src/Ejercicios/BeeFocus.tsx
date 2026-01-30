import { useRef } from "react";

export default function BeeFocus() {
  // 1. Creamos el ref indicando que es para un Input de HTML
  const inputRef = useRef<HTMLInputElement>(null);

  const irAlInput = () => {
    // 2. Usamos .current para acceder a las funciones del input
    // El "?" es por seguridad (TypeScript)
    inputRef.current?.focus();
    
    // También podemos cambiar cosas estéticas (solo para que veas el poder)
    if(inputRef.current) {
        inputRef.current.style.border = "2px solid yellow";
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe aquí..." />
      <button onClick={irAlInput}>Enfocar y Pintar</button>
    </div>
  );
}