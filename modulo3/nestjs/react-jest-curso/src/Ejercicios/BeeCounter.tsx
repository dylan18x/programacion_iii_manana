import { useState } from "react";

export default function BeeCounter(){
    const [num,setNum] = useState(0)

    const contador = (nuevoNum:number)=>{
        if(nuevoNum>=0){
            return setNum(nuevoNum)
        }else{
            alert("No se puede restar a 0")
        }
    }

    return(
        <div>
            <p>Contador: {num}</p>
            <button onClick={()=>contador(num+1)}>Sumar +1</button>
            <button onClick={()=>contador(num-1)}>Resta -1</button>
        </div>
    )
}