import { useEffect, useState } from 'react'

function Users() {
    const [users,setUsers] = useState<string[]>([]);
    const [error,setError] = useState<string | null>(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data.map((user: {name: string}) => user.name)))
        .catch((error) => setError('error fetching users'));
    }, []);
  return (
    <div>
        <h1>Users List</h1>
        {error && <p>Error: {error}</p>}
        <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users