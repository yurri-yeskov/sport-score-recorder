import React from 'react'

export default function GolferScoreCardScoresNineTotals(props) {
    const {totalsRowLabel, startHoleNum, endHoleNum, playerHoles, playerHoleScores} = props
    const nineTotalShots = playerHoleScores.slice(startHoleNum, endHoleNum)
        .reduce((prevHole, currHole) => {
            return prevHole.shots || prevHole.shots === 0 ? prevHole.shots + currHole.shots : prevHole + currHole.shots
        })
    const nineTotalScore = playerHoleScores.slice(startHoleNum, endHoleNum)
    .filter(score => score.shots > 0)
    .map((holeScore, index) => holeScore.shots - playerHoles[index].par) || 0
    .reduce((prevScore, currScore) => prevScore + currScore)
    return (
    <div className='GolferScoreCardScoresNineTotals'>
        <h6>
            {totalsRowLabel}
        </h6>
        <h6>
            {playerHoles.slice(startHoleNum, endHoleNum)
            .reduce((prevHole, currHole) => {
                return prevHole.par ? prevHole.par + currHole.par : prevHole + currHole.par
            })}
        </h6>
        <h6>
            {nineTotalShots || ''}
        </h6>
        <h6>
            {(nineTotalScore > 0 && `+${nineTotalScore}`) || (nineTotalScore < 0 && `${nineTotalScore}`) || 'E'}
        </h6>
    </div>
    )
}