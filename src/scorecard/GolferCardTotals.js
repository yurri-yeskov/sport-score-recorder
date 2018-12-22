import React from 'react'

export default function GolferCardTotals(props) {
    const {totalsRowLabel, startHoleNum, endHoleNum, holeScores} = props
    const totalShots = holeScores.slice(startHoleNum, endHoleNum)
        .reduce((prevHole, currHole) => {
            return prevHole.shots || prevHole.shots === 0 ? prevHole.shots + currHole.shots : prevHole + currHole.shots
        })
    let totalScore = holeScores.slice(startHoleNum, endHoleNum)
        .filter(score => score.shots > 0)
        .map(holeScore => holeScore.shots - holeScore.hole.par)
    totalScore = totalScore.length > 0 ? 
                    totalScore.reduce((prevScore, currScore) => {
                        return prevScore + currScore
                    }) : 0
    return (
        <div className='GolferCardTotals'>
            <h6>
                {totalsRowLabel}
            </h6>
            <h6>
                {holeScores.map(holeScore => holeScore.hole)
                .slice(startHoleNum, endHoleNum)
                .reduce((prevHole, currHole) => {
                    return prevHole.par ? prevHole.par + currHole.par : prevHole + currHole.par
                })}
            </h6>
            <h6>
                {totalShots || ''}
            </h6>
            <h6>
                {(totalScore > 0 && `+${totalScore}`) || (totalScore < 0 && `${totalScore}`) || 'E'}
            </h6>
        </div>
    )
}