import { useState } from "react";

export default function TextInput(){
    const [mascota,setMascota] = useState("")
    return(
        <div>
            <input
                type = "text"
                value = {mascota}
                onChange={e=>setMascota(e.target.value)}
                placeholder="Ingrese mascota para adoptar"
            />
        </div>
    )
}