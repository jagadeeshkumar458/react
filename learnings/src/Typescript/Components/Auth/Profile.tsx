export type ProfileProps = {
    name: string
    age: number
}
function Profile({ name, age }: ProfileProps) {
  return (
    <div>{name} is {age} years old</div>
  )
}

export default Profile