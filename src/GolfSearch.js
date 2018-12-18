import React from 'react'

export default function GolfSearch(props) {
    const {type, searchTerm} = props
    return (
        <div className="GolfSearch">
            <label>
                {`${type} search`}
                <input type='text' 
                name={`${type}Name`} 
                value={props.searchTerm}
                onChange={event => props.updateSearchTerm({updatedSearchTerm: event.target.value})}/>
            </label>
            {type === 'courses' ? 
                props.courses.filter(course => course.name.includes(searchTerm)).map(course => <h1 key={course.id}>{course.name}</h1>)
             : 
                props.players.filter(player => player.name.includes(searchTerm)).map(player => <h1 key={player.id}>{player.name}</h1>)
            }
        </div>
    )
}