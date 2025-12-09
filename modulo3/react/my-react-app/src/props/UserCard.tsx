
export default function UserCard({ user}) {
  return <div>{user.name} {user.last} - {user.age} años - {user.direction} - {user.phone} </div>;
}
