import React, { createContext, useContext, useState } from 'react'

const AuthContext=createContext(null)

export const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)
    const isAuthenticated = () => {
        return !!user;
      };
    const login=user=>setUser(user)
    const logout=()=>setUser(null)
    return (
        <AuthContext.Provider value={{user,login,isAuthenticated,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext)
}