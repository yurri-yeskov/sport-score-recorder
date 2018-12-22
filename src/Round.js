import React from 'react'
import GolfScoreCard from './scorecard/GolfScoreCard'

export default function Round(props) {
    return (
        <div className="Round">
            {props.currentGroup.map(golfer => {
                return <GolfScoreCard key={golfer.id} {...props} golfer={golfer}/>
            })}
        </div>
    )
}