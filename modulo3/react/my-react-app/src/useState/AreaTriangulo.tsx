import { useState } from "react";

export default function AreaTriangulo(){
    const[base,setBase] = useState(0)
    const[altura,setAltura] = useState(0)
    const[area,setArea] = useState(0)

    const areaCalcular = ()=>{
        setArea((base * altura)/2)
    }

    return (
        <div>
            <input
            type="number"
            value={base}
            onChange={(e)=>setBase(Number(e.target.value))}
            />
            <input
            type="number"
            value={altura}
            onChange={(e)=>setAltura(Number(e.target.value))}
            />
            <h2>El area es: {area}</h2>
            <button onClick={areaCalcular}> Calcular </button>
        </div>
    )
}