import React from 'react'
import GolfRoundForm from './GolfRoundForm'
import GolfScoreCard from './GolfScoreCard'

export default function GolfRound(props) {
    return (
        <div className="GolfRound">
            <GolfRoundForm {...props}/>
            <GolfScoreCard {...props}/>
        </div>
    )
}