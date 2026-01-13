import { useState } from "react"

export default function ToggleMessage(){
    const [mensaje,setMensaje] = useState(false)
    return(
        <div>
            <button onClick={()=>setMensaje(!mensaje)}>Adoptar</button>
            {mensaje && <p>Felicidades haz adoptado a Bruno</p>}
        </div>
    )
}
