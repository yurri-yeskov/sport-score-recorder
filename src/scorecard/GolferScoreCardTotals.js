import React from 'react'

export default function GolferScoreCardTotals(props) {
    const {golferHoles, golferHoleScores} = props
    let roundTotalScore = golferHoleScores.filter(score => score.shots > 0)
    .map((holeScore, index) => holeScore.shots - golferHoles[index].par) || 0
    roundTotalScore = roundTotalScore.length > 0 ? roundTotalScore.reduce((prevScore, currScore) => prevScore + currScore) : 0
    return (
        <div className="GolferScoreCardTotals">
            <h6>TOT</h6>
            <h6>{golferHoles.reduce((prevHole, currHole) => {
                return prevHole.par ? prevHole.par + currHole.par : prevHole + currHole.par
            })}</h6>
            <h6>{golferHoleScores.reduce((prevHole, currHole) => {
                return prevHole.shots || prevHole.shots === 0 ? prevHole.shots + currHole.shots : prevHole + currHole.shots
            }) || ''}</h6>
            <h6>{(roundTotalScore > 0 && `+${roundTotalScore}`) || (roundTotalScore < 0 && `${roundTotalScore}`) || 'E'}</h6>
        </div>
    )
}