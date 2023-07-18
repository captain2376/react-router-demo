import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate=useNavigate()
    return (
        <>
        <div>
            <h1>Order Conformed</h1>
        </div>
        <button onClick={()=>navigate(-1)} >Go Back</button>
        </>
    )
}
