import { useState, useDeferredValue } from 'react';

export default function ValidacionEmail() {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')
  const [nombre,setNombre] = useState('')
  const [apellido,setApellido] = useState('')
  const emailDiferido = useDeferredValue(email);
  const passwordDiferido = useDeferredValue(password);
  const esValido = emailDiferido.includes("@") && emailDiferido.includes(".") && passwordDiferido === 'admin'
  const [access, setAccess] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleAccess = () => {
    if (attempts >= 3) return;
    if (password !== 'admin') {
      alert("Contraseña incorrecta. Acceso denegado.");
      setAttempts(attempts + 1);
      return;
    }
    const success = window.confirm("¿Tienes permiso para acceder?");
    if (success) setAccess(true);
    else setAttempts(attempts + 1);
  };
  return (
    <>
      <input type='input' value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Ingrese su nombre" />
      <br/>
      <input type='input' value={apellido} onChange={e => setApellido(e.target.value)} placeholder="Ingrese su apellido" />
      <br/>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Tu correo electrónico" />
      <br/>
      <input type='input' value={password} onChange={e => setPassword(e.target.value)} placeholder="Ingrese su clave" />
      <br/>
      {!access ? (
        <>
          <button onClick={handleAccess} disabled={attempts >= 3}>
            Intentar acceso
          </button>
          {attempts >= 3 && <p style={{ color: esValido ? 'lightgreen' : 'salmon' }}>
        {emailDiferido === "" ? "Esperando..." : esValido ? "Login exitoso" : "Login inválido"}
      </p>}
        </>
      ) : (
        <p>✅ Acceso concedido</p>
      )}
    </>
  );
}