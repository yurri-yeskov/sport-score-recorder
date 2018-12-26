import React from 'react'

export default function GolfAddCourseForm(props) {
    let holesArray = []
    while (holesArray.length < 18) {
        holesArray.push({number: holesArray.length + 1, par: Math.floor(Math.random() * 3) + 3})
    }
    return (
        <form className="GolfAddCourseForm" onSubmit={event => {
            event.preventDefault()
            props.addCourse({name: event.target.name.value, holes: holesArray.map((hole, index) => {
                return {
                    ...hole,
                    par: event.target[index + 1].value
                }
            })})
            props.history.goBack()
        }}>
            <label name='name'>
                <input type='text' name='name' placeholder='course name'/>
            </label>
            {holesArray.map((hole, index) => {
                return (
                    <label key={index} name='hole'>
                        <h4>{hole.number}</h4>
                        <input type='number' name='par' min='3' max='5' defaultValue={hole.par}/>
                    </label>
                )    
            })}
            <input type='submit' value='add course'/>
        </form>
    )
}