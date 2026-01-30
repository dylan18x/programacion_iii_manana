import { useMemo, useState } from "react";

export default function BeeFilter(){
    const [ array,setArray] = useState([10,20,30,40,50])
    const [minimo,setMinimo] = useState(30)

    const calcular = useMemo(()=>{
        return array.filter((n=>n >= minimo))
    },[array,minimo]);

    return(
        <div>
            <p>Minimo: {minimo}</p>
            <p>Numeros que son mayores que el minimo:</p>
                <ul>
                    {calcular.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
                </ul>
        </div>
    )
}