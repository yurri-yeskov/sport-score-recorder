import React from 'react'
import GolfScoreCard from './GolfScoreCard'

export default function GolfRound(props) {
    return (
        <div className="GolfRound">
            {props.currentPlayers.map(player => <GolfScoreCard key={player.id} {...props} player={player}/>)}
        </div>
    )
}