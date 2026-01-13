import { useState } from "react";

export default function ButtonCounter(){
    const [count,setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>
                Personas intersadas en adoptar a Max: {count} personas
            </button>
        </div>
    )
}