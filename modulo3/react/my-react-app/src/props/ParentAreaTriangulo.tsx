import AreaTriangulo from "./AreaTriangulo";

export default function ParentAreaTriangulo() {
  const handleLogin = (data:any) => console.log("Area", data);

  return <AreaTriangulo onLogin={handleLogin} />;
}