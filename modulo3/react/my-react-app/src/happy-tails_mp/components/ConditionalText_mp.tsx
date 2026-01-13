export default function ConditionalText(){
    const isLoggeIn = true
    return(
        <p>
            {isLoggeIn ? 'Bienvenido a Happy Tails' : 'Porfavor inicie sesion'}
        </p>
    )
}