import React from 'react'
import { Link } from 'react-router-dom'

export default function Leaderboard({group}) {
    return (
        <div className="Leaderboard">
            {group.golfers.map(golfer => { 
                return (
                    <Link key={golfer._id} to={`/${golfer.name}`}>
                        {golfer.name}
                        {golfer.currentCourseScore.holeScores.map(holeScore => holeScore.shots)
                        .reduce((prevScore, currScore) => prevScore + currScore)}
                    </Link>
                )
            })}
        </div>
    )
}