import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}
function User() {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Jagadeesh',
            email: 'abc@gmail.com'
        })
    }

    // const handleLogout = () => {
    //     setUser(null)
    // }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <div>User name {user.name}</div>
        <div>User email {user.email}</div>
    </div>
  )
}

export default User