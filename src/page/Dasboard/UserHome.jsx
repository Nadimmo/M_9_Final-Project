import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const UserHome = () => {
    const {user} = useContext(AuthContext)

  return (
    <div>
        <h1 className="text-2xl font-mono font-bold text-left">Hi, {user?.displayName} Welcome Back</h1>

        
    </div>
  )
}

export default UserHome