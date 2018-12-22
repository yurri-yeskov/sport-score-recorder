import React from 'react'

export default function Gate(props) {
    return (
        <form className='Gate'>
            <label name='name'>
                Name:
                <input type='text' name='name'/>
            </label>
            <label>
                Password:
                <input type='text' name='password'/>
            </label>
            <input type='submit' value='login'/>
            <input type='button' value='register'/>
        </form>
    )
}