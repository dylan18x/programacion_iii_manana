import { useState } from "react";

export default function Suma(){
    const [n1,setN1] = useState(0);
    const [n2,setN2] = useState(0);
    const [suma,setSuma] = useState(0)
    const resultado = ()=>{
        setSuma(n1 + n2)
    };
    return(
        <div>
            <input
            value={n1}
            placeholder="Ingrese numero 1"
            onChange={(e)=>setN1(Number(e.target.value))}
            />
            <input
            value={n2}
            placeholder="Ingrese numero 2"
            onChange={(e)=>setN2(Number(e.target.value))}
            />
            <button onClick={()=>resultado()}>Calcular</button>
            <p>{suma || 'Respuesta: '}</p>
        </div>
    )
}