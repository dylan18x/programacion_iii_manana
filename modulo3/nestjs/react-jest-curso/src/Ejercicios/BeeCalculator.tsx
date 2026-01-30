import { useMemo, useState } from "react";

export default function BeeCalculator(){
    const [pollen,setPollen] = useState(0)

    const calcular = useMemo(()=>{
        return pollen*0.15
    },[pollen])

    return(
        <div>
            <h3> Pollen: {pollen}</h3>
            <h3> Impuesto del pollen: {calcular}</h3>
            <button onClick={()=>setPollen(pollen +1)}>Calcular impuesto</button>
        </div>
    )
}