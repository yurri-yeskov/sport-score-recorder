import React from 'react'

export default function GolfAddCourseForm(props) {
    const hole = {number: 0, par: 3}
    let holesArray = new Array(18)
    holesArray = holesArray.map(() => {
        return {...hole, number: ++hole.number}
    })
    return (
        <form className="GolfAddCourseForm" onSubmit={event => {
            event.preventDefault()
            props.addCourse({name: event.target.name.value, holes: holesArray})
        }}>
            <label name='name'>
                <input type='text' name='name' placeholder='course name'/>
            </label>
            <input type='submit' value='add course'/>
        </form>
    )
}