import React from 'react'

export default function Gate({loginGolfer, addGolfer}) {
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
            <input type='button' value='register' onClick={event => {
                event.preventDefault()
                addGolfer(event.target.form[0].value)
            }}/>
        </form>
    )
}