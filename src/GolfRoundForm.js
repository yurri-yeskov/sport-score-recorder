import React from 'react'
import { Link } from 'react-router-dom'
import GolfSearch from './GolfSearch'

export default function GolfRoundForm(props) {
    return (
        <div className="GolfRoundForm">
            <div className="chooseCourseForm">
                {/* <label name="chooseCourse">
                    Choose Course:
                    <select name='chooseCourse'>
                        {props.courses.map(course => <option value={course.name}>{course.name}</option>)}
                    </select>
                </label>
                <Link to="/search/courses">Search Courses</Link> */}
                <GolfSearch {...props} type='courses'/>
            </div>
            <div className="choosePlayersForm">
                {/* <label name="choosePlayers">
                    Choose Players:
                    <select multiple name='choosePlayers'>
                        {props.players.map(player => <option value={player.name}>{player.name}</option>)}
                    </select>
                </label>
                <Link to="/search/players">Search Players</Link> */}
                <GolfSearch {...props} type='players'/>
            </div>
            <Link to='/play'/>
        </div>
    )
}