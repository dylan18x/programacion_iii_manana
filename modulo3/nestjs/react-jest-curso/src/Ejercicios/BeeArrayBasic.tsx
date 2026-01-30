import { useState } from "react";

export default function BeeArrayBasic(){
    const [array,setArray] = useState(["Honey","Bumble"])
    const [nombre,setNombre] = useState('')

    const agregar=(name:string)=>{
        setArray([...array,name])
    }

    return(
        <div>
            {array.map((item,index)=>(
                <ul>
                    <li key={index}>{item} </li>
                </ul>
            ))}
            <input
                type="text"
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                placeholder="Ingrese nombre de abeja..."
            />

            <button onClick={()=>agregar(nombre)}>Añadir</button>
        </div>
    )
}