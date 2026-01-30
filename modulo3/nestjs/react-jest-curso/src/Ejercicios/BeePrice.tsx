interface Props{
    producto: string;
    precio: number;
} 

export default function BeePrice({producto,precio}:Props){
    return(
        <div>
            <h3>El {producto} cuesta ${precio}</h3>
        </div>
    )
}