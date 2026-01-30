import { useState, useMemo } from "react";

export default function BeeProduction(){
    const [pollen,setPollen] = useState(0);
    const [inputNom,setInputNom] = useState('');

    const Miel = useMemo(()=>{
        console.log("Calculando pollen")
        return pollen * 10;
    },[pollen])

    return(
        <div>
            <input
                type="text"
                value={inputNom}
                onChange={(e)=>setInputNom(e.target.value)}
                placeholder="Ingrese su nombre..."
            />
            <p>Nombre del apicultor: {inputNom}</p>
            <p>Polen actual: {pollen}</p>
            <p>Miel calculada (x10): {Miel}</p>

            <button onClick={()=>setPollen(pollen + 1)}>Recolectar +1 Pollen</button>
        </div>
    )
}