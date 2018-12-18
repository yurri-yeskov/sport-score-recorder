import React from 'react'
import { Route, Link } from 'react-router-dom'

export default function GolfRoundForm(props) {
    return (
        <div className="GolfRoundForm">
            <div className="chooseCourseForm">
                <label name="chooseCourse">
                    Choose Course:
                    <select name='chooseCourse'>
                        {props.courses.map(course => <option value={course.name}>{course.name}</option>)}
                    </select>
                </label>
                <Link to="/search/courses">Search Courses</Link>
            </div>
            <div className="choosePlayersForm">
                <label name="choosePlayers">
                    Choose Players:
                    <select multiple name='choosePlayers'>
                        {props.players.map(player => <option value={player.name}>{player.name}</option>)}
                    </select>
                </label>
                <Link to="/search/players">Search Players</Link>
            </div>
            <input type='submit' value='Tee Off'/>
        </div>
    )
}