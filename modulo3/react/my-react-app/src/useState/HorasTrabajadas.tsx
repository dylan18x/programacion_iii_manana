import { useState } from "react";

export default function HorasTrabajadas(){
    const[horas,setHoras] = useState(0);
    const[valorHora, setValorHora] = useState(0);
    const[salarioSem,setSalarioSem] = useState(0);

    const salario = ()=>{
        setSalarioSem((horas*valorHora)*7)
    }
    return (
        <div>
            <h1>Calcule su salario semanal!!</h1>
            <h3>Horas trabajadas</h3>
            <input
            value={horas}
            onChange={(e)=>setHoras(Number(e.target.value))}
            />
            <br></br>
            <h3>Valor por hora</h3>
            <input
            value={valorHora}
            onChange={(e)=>setValorHora(Number(e.target.value))}
            />
            <h2>Su salario semanal es: {salarioSem}</h2>
            <button onClick={salario}> Calcular </button>
        </div>
    )
}