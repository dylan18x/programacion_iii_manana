import { useCallback, useState } from "react";

export default function BeeMessage(){
    const [mensaje,setMensaje] = useState('');

    const alertar = useCallback(()=>{
        alert(mensaje)
    },[mensaje]);

    return(
        <div>
            <h3>Mensaje: {mensaje}</h3>
            <input
                type="text"
                value={mensaje}
                onChange={(e)=>setMensaje(e.target.value)}
                placeholder="Escribe algo..."
            />
            <button onClick={alertar}>Añadir</button>
        </div>
    )
}