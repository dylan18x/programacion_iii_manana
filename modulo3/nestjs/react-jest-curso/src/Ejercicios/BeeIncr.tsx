interface Props{
    sumar: ()=>void;
}

export default function BeeIncr({sumar}:Props){
    return(
        <button onClick={sumar}>Sumar +1</button>
    )
}