export default function ShowDate(){
  const today = new Date().toLocaleDateString();
  return <p>Fecha de adopcion de Luna: {today}</p>
}