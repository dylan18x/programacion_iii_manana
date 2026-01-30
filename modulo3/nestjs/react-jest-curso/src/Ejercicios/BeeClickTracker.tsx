import { useRef, useState } from "react";

export default function BeeClicker(){
    const clickCount = useRef(0);
    const [estado,setEstado] = useState(false)

    const registrarClick = ()=>{
        clickCount.current = clickCount.current + 1;
        console.log("Click numero: ",clickCount.current)

    }

    return(
        <div>
            <h3>Clicks en pantalla: {estado ? clickCount.current : "Misterio"}</h3>
            <button onClick={registrarClick}>Registrar Clic</button>
            <button onClick={()=>setEstado(true)}>¿Cuantos Van?</button>
        </div>
    )
}