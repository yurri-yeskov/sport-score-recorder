import React from 'react'
// import { Route } from 'react-router-dom'
import GolfScoreCard from '../scorecard/GolfScoreCard'

export default function GolfRound(props) {
    return (
        <div className="GolfRound">
            {props.currentPlayers.map(player => {
                return <GolfScoreCard key={player.id} {...props} player={player}/>
            })}
        </div>
    )
}