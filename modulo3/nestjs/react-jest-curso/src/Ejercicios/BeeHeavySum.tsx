import { useMemo, useState } from "react";

export default function BeeHeavySum(){
    const [num,setNum] = useState(0)

    const suma = useMemo(()=>{
        let total = 0
        for(let i=0;i<=num;i++){
            total += i
        }
        return total;
    },[num])

    return(
        <div>
            <input
                type="text"
                value= {num}
                onChange={(e)=>setNum(Number(e.target.value))}
                placeholder="Ingrese numero"
            />
            <p>La suma del 1 hasta el {num} es: {suma}</p>
        </div>
    )
}