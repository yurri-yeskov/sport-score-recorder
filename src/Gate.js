import React from 'react'

export default function Gate(props) {
    return (
        <form className='Gate'>
            <label name='name'>
                Name:
                <input type='text' name='name'/>
                Password:
                <input type='text' name='password'/>
            </label>
        </form>
    )
}