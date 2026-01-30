import { useState } from "react";

export default function InputParrafo(){
    const [texto,setTexto] = useState('');

    return(
        <div>
            <input
            value={texto}
            placeholder="Ingrese Texto"
            onChange={(e)=>setTexto(e.target.value)}
            />
            <p>{texto || '....'}</p>
        </div>
    )
}