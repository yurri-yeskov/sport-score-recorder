import React from 'react'

export default function GolferScoreCardHeader(props) {
    const {player, playerHoleScores} = props
    return (
        <div className='GolferScoreCardHeader'>
            <h1 className='playerName'>{player.name}</h1> 
            <button onClick={() => {
                playerHoleScores.forEach(holeScore => props.updateCurrentHoleScore({...holeScore, shots: 0}))
            }}>
                reset
            </button>
        </div>
    )
}