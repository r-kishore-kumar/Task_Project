import { createContext, useContext, useState } from 'react'
import { AuthContext } from './App'
import { Navigate } from 'react-router-dom';


export function AuthProvider() {
    const {login, isAuthenticated, logout} = useContext(AuthContext)
    console.log(login)
    const [user, setUser] = useState({
        name: 'Hello, Michael',
        email: 'michael@example.com',
        bio: 'Lorem ipsum dolor sit amet.',
      });
    return(
        <div>
            {isAuthenticated?
            <Navigate to={'/chart'}/>
            :<Navigate to={'/authenticationfilter'}/>}
            <button onClick={()=>{login()}}>Login</button>
            <button onClick={()=>{logout()}}>Logout</button>
        </div>
    )
  }