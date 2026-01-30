import { useState,useMemo } from "react";

export default function BeeInventoryArray(){
    const [array,setArray] = useState([10,20,30])

    const suma = useMemo(()=>{
        return array.reduce((total,valor)=>total + valor,0);
    },[array])

    const updateInventory = ((index:number,value:number)=>{
        const nuevoArray = [...array]
        nuevoArray[index] = value
        setArray(nuevoArray)
    })

    return(
        <div>
            {array.map((a,b)=>(
                <div key={b}>
                    <p>Frasco {b+1}</p>
                    <input
                        type="text"
                        value={a}
                        onChange={(e)=>updateInventory(b,Number(e.target.value))}
                    />
                </div>
            ))}
            <h3>Total de la semana: {suma} mg</h3>
        </div>
    )
}