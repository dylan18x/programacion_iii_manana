import { useState } from "react";
export default function ColorBox(){
    const [color,setColor] = useState('lightblue');
    return(
        <>
            <p>Comprar collar para mascota:</p>
            <div style={{width:100,height:100,backgroundColor:color}}></div>
            <button onClick={()=>setColor('salmon')}> Cambiar color </button>
        </>
    )
}