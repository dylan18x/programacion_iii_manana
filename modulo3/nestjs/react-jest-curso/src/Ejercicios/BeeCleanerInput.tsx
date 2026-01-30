import { useRef, useState } from "react";

export default function BeeCleaner(){
    const [texto,setTexto] = useState('');
    const cajaTexto = useRef<HTMLInputElement>(null);

    const limpiar = ()=>{
        setTexto('')
    }
    const irInput = ()=>{
        cajaTexto.current?.focus()
    }
    return(
        <div>
            <h3>Hola Bienvenido</h3>
            <input
                ref={cajaTexto}
                type="text"
                value={texto}
                onChange={(e)=>setTexto(e.target.value)}
                placeholder="Escriba algo..."
            />
            <button onClick={limpiar}>Limpiar</button>
            <button onClick={irInput}>Enfocar</button>
        </div>
    )
}