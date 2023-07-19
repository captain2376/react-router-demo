import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    // const params= useParams()
    // const userId=params.userId
    const {userId}=useParams()
    return (
        <div>
            <h2>Details about User {userId} </h2>
           
        </div>
    )
}
