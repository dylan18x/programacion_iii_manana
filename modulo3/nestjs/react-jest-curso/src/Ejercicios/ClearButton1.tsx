interface Props{
    onClear: ()=>void;
}

export default function ClearButton({onClear}:Props){
    return(
        <div>
            <button onClick={onClear}>Limpiar </button>
        </div>
    )
}