import React from 'react'
import { Route } from 'react-router-dom'

export default function GolfRoundForm(props) {
    return (
        <div className="GolfRoundForm">
            <label name="chooseCourse">
                Choose Course:
                <select name='chooseCourse'>
                    {/* {props.courses.map(course => <option value={course.name}>{course.name}</option>)} */}
                </select>
            </label>
            <label name="choosePlayers">
                Choose Players:
                <select name='choosePlayers'>
                    {/* {props.players.map(player => <option value={player.name}>{player.name}</option>)} */}
                </select>
            </label>
        </div>
    )
}