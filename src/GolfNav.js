import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function GolfNav(props) {
    return (
        <div className='GolfNav'>
            <Link to={props.location} onClick={() => props.history.goBack()}>Back</Link>
            <NavLink to='/'>Home</NavLink>
            <button onClick={() => {
                props.logoutGolfer()
            }}>logout</button>
        </div>
    )
}