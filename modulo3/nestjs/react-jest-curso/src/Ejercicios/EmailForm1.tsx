interface Props {
  email: string;
  setEmail: (val: string) => void;
  estado: boolean;
  setEstado: (val: boolean) => void;
  validar: () => void;
}

export default function EmailForm({
  email,
  setEmail,
  estado,
  setEstado,
  validar,
}: Props) {
  const validacion = () => {
    if (email.includes("@") && email.includes(".") && email.length >= 5) {
      setEstado(true);
    } else {
      setEstado(false);
    }

    validar(); // avisa a App (intento)
  };

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingrese email..."
      />
      <button onClick={validacion}>Validar Email</button>
      <h3>{estado ? "Email valido" : "Email invalido"}</h3>
    </div>
  );
}
