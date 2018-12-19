import React from 'react'

export default function GolferScoreCardScoresNineTotals(props) {
    const {totalsRowLabel, startHoleNum, endHoleNum, playerHoles, playerHoleScores} = props
    return (
    <div className='GolferScoreCardScoresNineTotals'>
        <h6>{totalsRowLabel}</h6>
        <h6>{playerHoles.slice(startHoleNum, endHoleNum)
            .reduce((prevHole, currHole) => {
                return prevHole.par ? prevHole.par + currHole.par : prevHole + currHole.par
            })}</h6>
        <h6>{playerHoleScores.slice(startHoleNum, endHoleNum)
            .reduce((prevHole, currHole) => {
            console.log(prevHole, currHole)
            return prevHole.shots || prevHole.shots === 0 ? prevHole.shots + currHole.shots : prevHole + currHole.shots
        })}</h6>
        <h6>{playerHoleScores.slice(startHoleNum, endHoleNum)
            .map((holeScore, index) => holeScore.shots - playerHoles[index].par)
            .reduce((prevScore, currScore) => prevScore + currScore) || 'E'}</h6>
    </div>
    )
}