import { useState } from "react";

export default function SimpleForm(){
    const [name,setName] = useState('')
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        alert(`Hola, ${name}`)
    };

    return(
        <form onSubmit={handleSubmit}>
            <p>Tramites para adoptar:</p>
            <input
                type="text"
                placeholder="Ingrese nombre"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    )
}