import { useState,useCallback } from "react";

export default function UseCallbackTotal(){
    const [price,setPrice] = useState(0);
    const [qty,setQty] = useState(0);
    const total = useCallback(()=>{
        console.log("Recalculando total...")
        return price * qty
    },[price,qty])
    return(
        <div>
            <input
            value={price}
            placeholder="Ingrese numero 1"
            onChange={(e)=>setPrice(Number(e.target.value))}
            />
            <input
            value={qty}
            placeholder="Ingrese numero 2"
            onChange={(e)=>setQty(Number(e.target.value))}
            />
            <p>Total: {total || '...'}</p>
        </div>
    )
}