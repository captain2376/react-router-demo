import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './auth'
export const Navbar = () => {
    const navStyleHeading=({isActive})=>{
        return {
            fontWeight:isActive?"Bold":"normal",
            textDecoration:isActive?'none':'underline',
            //color:isActive?'red':'blue'
        }
    }
    const auth=useAuth()
    return (
        <nav className='main'>

            {/* <Link to='/' >Home</Link>
            <Link to='/About'>About</Link> */}

            <NavLink to='/' style={navStyleHeading}>Home</NavLink>
            <NavLink to='/About'  style={navStyleHeading}>About</NavLink>
            <NavLink to='/product'  style={navStyleHeading}>Products</NavLink>
            <NavLink to='/users' style={navStyleHeading}>Users</NavLink>
            <NavLink to='/profile' style={navStyleHeading}>Profile</NavLink>
            {
                !auth.user && <NavLink to='/login'
               style={navStyleHeading}>
                Login</NavLink>

            }
        </nav>
    )
}
//Nav Link knows whether or not it is the active link
//we can use it to  style active link
//special about navlink is byDefault it receives active clas when the link is the current route
//Mavlink component will set a property called isActive whidh can be destrectured from th function parameter
//Navlink component is specificully meant for building components like 
//NAvBAr ,BreadCrumbers or set of tabs where you would like to highlight the
//current selecte item an provide useful context with screen readers.
//if you want to navigate to route from other parts of the app
//Link should be the component to use as you would't want the active class
//applied when it it needed