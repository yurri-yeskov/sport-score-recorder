import React from 'react'
import { Link } from 'react-router-dom'
import GolfSearch from './GolfSearch'

export default function RoundForm(props) {
    return (
        <div className="RoundForm">
            <div className="chooseCourseForm">
                <GolfSearch {...props} type='courses'/>
            </div>
            <div className="chooseGolfersForm">
                <GolfSearch {...props} type='golfers'/>
            </div>
            <Link to='/play'/>
        </div>
    )
}