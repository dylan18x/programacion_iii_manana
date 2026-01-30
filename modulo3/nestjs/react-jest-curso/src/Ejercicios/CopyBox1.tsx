interface Props{
    input: string;
    setInput: (val:string)=>void;
    texto: boolean;
    setTexto: (val:boolean)=>void;
}

export default function CopyBox({input,setInput,texto,setTexto}: Props) {
  const verificar = () => {
    if (input === '') {
      setTexto(false)
    } else {
      setTexto(true)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escriba algo..."
      />
      <button onClick={verificar}>Copiar</button>
      <h3>{texto ? "Texto copiado correctamente:" : ''}</h3>
      <h3>{texto ? input : "No hay texto para copiar"}</h3>
    </div>
  )
}