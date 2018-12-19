import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function GolfNav(props) {
    return (
        <div className='GolfNav'>
            <Link to={props.location} onClick={() => props.history.goBack()}>Back</Link>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/search/courses'>Home</NavLink>
            <NavLink to='/search/players'>Home</NavLink>
        </div>
    )
}