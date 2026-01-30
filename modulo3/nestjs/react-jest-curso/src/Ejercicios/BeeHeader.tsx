interface Props{
    titulo: string;
    subtitulo: string;
}

export default function BeeHeader({titulo,subtitulo}:Props){
    return(
        <header>
            {titulo}<br/>{subtitulo}
        </header>
    )

}