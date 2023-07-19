import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const[searchParam,setSearchParam]= useSearchParams()
    const ShowActiveUsers=searchParam.get('filter')==='active'
    return (
        <div>
            <h2>USER 1</h2>
            <h2>USER 2</h2>
            <h2>USER 3</h2>
           <Outlet/>
           <button onClick={()=>setSearchParam({filter:'active'})} >
            Active users
            </button>
           <button onClick={()=>setSearchParam({})}>
            Reset filter
            </button>
            {
                ShowActiveUsers?<h2>Showing active users</h2>:<h2>Showing all users</h2>
            }
        </div>
    )
}
 