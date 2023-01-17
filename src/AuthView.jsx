import React, { useState } from 'react'

const AuthView = ({ user }) => {
    const [auth, setAuth] = useState(true)
    return (
        <>
            {!auth ? <h2>404</h2> : <h2>Welcome {user}</h2>}
        </>
    )
}

export default AuthView