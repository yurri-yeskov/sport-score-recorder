import React from 'react'

export default function ScoreCard(props) {
    return (
        <div className="ScoreCard">
            <GolfRoundForm/>
            <GolfAddCourseForm/>
            <GolfAddPlayerForm/>
            <GolfScoreCard/>
        </div>
    )
}