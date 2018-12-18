import React from 'react'
import GolfRoundForm from './GolfRoundForm'
import GolfSearchPage from './GolfSearchPage'
import GolfScoreCard from './GolfScoreCard'

export default function ScoreCard(props) {
    return (
        <div className="ScoreCard">
            <GolfRoundForm {...props}/>
            <GolfSearchPage {...props}/>
            <GolfScoreCard {...props}/>
        </div>
    )
}