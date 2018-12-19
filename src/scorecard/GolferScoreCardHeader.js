import React from 'react'

export default function GolferScoreCardHeader(props) {
    const {player, playerHoleScores} = props
    return (
        <div className='GolferScoreCardHeader'>
            <h1>{player.name}</h1> 
            <button onClick={() => {
                console.log(playerHoleScores)
                playerHoleScores.forEach(holeScore => props.updateCurrentHoleScore({...holeScore, shots: 0}))
            }}>
                reset
            </button>
        </div>
    )
}