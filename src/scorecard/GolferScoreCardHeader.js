import React from 'react'

export default function GolferScoreCardHeader(props) {
    const {golfer, golferHoleScores} = props
    return (
        <div className='GolferScoreCardHeader'>
            <h1 className='golferName'>{golfer.name}</h1> 
            <button onClick={() => {
                golferHoleScores.forEach(holeScore => props.updateCurrentHoleScore({...holeScore, shots: 0}))
            }}>
                reset
            </button>
            <h1 className='golferScore'>{golferHoleScores.reduce((prevScore, nextScore) => {
                return prevScore.shots || prevScore.shots === 0 ? prevScore.shots + nextScore.shots : prevScore + nextScore.shots
            }) || ''}</h1>
        </div>
    )
}