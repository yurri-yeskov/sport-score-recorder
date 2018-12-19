import React from 'react'

export default function GolferScoreCardTotals(props) {
    const {playerHoles, playerHoleScores} = props
    return (
        <div className="GolferScoreCardTotals">
            <h6>TOT</h6>
            <h6>{playerHoles.reduce((prevHole, currHole) => {
                return prevHole.par ? prevHole.par + currHole.par : prevHole + currHole.par
            })}</h6>
            <h6>{playerHoleScores.reduce((prevHole, currHole) => {
                return prevHole.shots || prevHole.shots === 0 ? prevHole.shots + currHole.shots : prevHole + currHole.shots
            })}</h6>
            <h6>{playerHoleScores.map((holeScore, index) => holeScore.shots - playerHoles[index].par)
            .reduce((prevScore, currScore) => prevScore + currScore) || 'E'}</h6>
        </div>
    )
}