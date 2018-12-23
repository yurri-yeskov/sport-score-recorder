import React from 'react'

export default function Gate({loginGolfer}) {
    return (
        <form className='Gate' onSubmit={event => {
            event.preventDefault()
            loginGolfer({name: event.target.name.value, password: event.target.password.value})
        }}>
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