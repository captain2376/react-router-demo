import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Product = () => {
    return (
        <>
        <div>
            <input type='search' placeholder='Search Products'/>
        </div>
        <nav>
             <Link to="/product/featured">Featured</Link>
             <Link to='/product/new'>New</Link>
        </nav>
        <Outlet />
        </>
    )
}
