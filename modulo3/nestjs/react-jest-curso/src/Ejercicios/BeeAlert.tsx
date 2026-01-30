interface Props{
    mensaje: string;
    onDisparar: ()=> void;
}

export default function BeeAlert({mensaje,onDisparar}:Props){
    return(
        <div>
            <h3>El mensaje es: {mensaje}</h3>
            <button onClick={onDisparar}>Pulse</button>
        </div>
    )
}