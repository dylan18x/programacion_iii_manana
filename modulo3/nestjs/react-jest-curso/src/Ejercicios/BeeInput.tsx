import { useState } from "react";

export default function BeeInput(){
    const [input,setInput] = useState('')

    return(
        <div>
            <h3>Nombre: {input.toUpperCase()}</h3>
            <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Escribe aqui el nombre..."
            />
        </div>
    )
}