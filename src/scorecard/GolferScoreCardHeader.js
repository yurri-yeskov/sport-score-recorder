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
            <h1 className='playerScore'>{playerHoleScores.reduce((prevScore, nextScore) => {
                return prevScore.shots || prevScore.shots === 0 ? prevScore.shots + nextScore.shots : prevScore + nextScore.shots
            }) || ''}</h1>
        </div>
    )
}