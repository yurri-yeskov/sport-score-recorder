import React from 'react'

export default function GolferScoreCardScoresNineTotals(props) {
    const {totalsRowLabel, startHoleNum, endHoleNum, playerHoles, playerHoleScores} = props
    const nineTotalShots = playerHoleScores.slice(startHoleNum, endHoleNum)
        .reduce((prevHole, currHole) => {
            return prevHole.shots || prevHole.shots === 0 ? prevHole.shots + currHole.shots : prevHole + currHole.shots
        })
    let nineTotalScore = playerHoleScores.slice(startHoleNum, endHoleNum)
    .filter(score => {
        console.log('filter')
        return score.shots > 0
    })
    .map((holeScore, index) => {
        console.log('map')
        return holeScore.shots - playerHoles[index].par
    })
    nineTotalScore = nineTotalScore.length > 0 ? nineTotalScore.reduce((prevScore, currScore) => {
                                                    console.log('reduce')
                                                    return prevScore + currScore
                                                }) : 0
    
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