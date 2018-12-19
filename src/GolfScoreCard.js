import React from 'react'
import GolferScoreCard from './GolferScoreCard'

export default function GolfScoreCard(props) {
    return (
        <div className="GolfScoreCard">
            {props.currentPlayers.map(player => <GolferScoreCard key={player.id} {...props} player={player}/>)}
        </div>
    )
}