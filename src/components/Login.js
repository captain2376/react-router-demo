import React, { useState ,useEffect} from 'react'
import { useAuth } from './auth'
import { useLocation, useNavigate } from 'react-router-dom'

 const Login = () => {
    const [user,setUser]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const redirectPath=location.state?.path||'/'

    useEffect(() => {
        // If the user is already authenticated, redirect them to the redirectPath
        if (auth.isAuthenticated()) {
          navigate(redirectPath, { replace: true });
        }
      }, [auth, navigate, redirectPath]);

    const handleLogin=()=>{
        auth.login(user)
        navigate(redirectPath,{replace:true})
    }
    return (
        <div>
            <label>Username
            <input type='text' onChange={e=>setUser(e.target.value)}/>
            </label>
            <button onClick={handleLogin} >Login</button>
        </div>
    );
}
export default Login;


