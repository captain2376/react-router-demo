import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate=useNavigate()
    return (
    <>
    <div><h1>Home Page</h1> </div>
    <button onClick={() => navigate('order-summary',{replace:true})}>Place Order</button>
    
    </>
    )
}
