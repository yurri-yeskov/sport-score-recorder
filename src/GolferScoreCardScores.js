import React from 'react'
import GolferScoreCardHole from './GolferScoreCardHole'

export default function GolferScoreCardScores(props) {
    const {playerHoles, playerHoleScores} = props
    return (
        <div className='GolferScoreCardScores'>
            {playerHoles.slice(0, 9)
            .map(hole => {
                const phs = playerHoleScores.find(holeScore => holeScore.hole_id === hole.id)
                return (
                <GolferScoreCardHole key={phs.id} {...props}
                hole={hole}
                phs={phs}
                playerScore={phs.shots - playerHoles.find(hole => hole.id === phs.hole_id).par}
                />
                )
            })}
            <div className='scoreCardTotalsRow'>
                <h6>IN</h6>
                <h6>{playerHoles.slice(0, 9)
                    .reduce((prevHole, currHole) => {
                    return prevHole.par ? prevHole.par + currHole.par : prevHole + currHole.par
                })}</h6>
                <h6>{playerHoleScores.slice(0, 9)
                    .reduce((prevHole, currHole) => {
                    return prevHole.shots ? prevHole.shots + currHole.shots : prevHole + currHole.shots
                })}</h6>
                <h6>{playerHoleScores.slice(0, 9)
                    .map((holeScore, index) => holeScore.shots - playerHoles[index].par)
                    .reduce((prevScore, currScore) => prevScore + currScore)}</h6>
            </div>
            {playerHoles.slice(9, 18)
            .map(hole => {
                const phs = playerHoleScores.find(holeScore => holeScore.hole_id === hole.id)
                return (
                <GolferScoreCardHole key={phs.id} {...props}
                hole={hole}
                phs={phs}
                playerScore={phs.shots - playerHoles.find(hole => hole.id === phs.hole_id).par}
                />
                )
            })}
            <div className='scoreCardTotalsRow'>
                <h6>OUT</h6>
                <h6>{playerHoles.slice(9, 18)
                    .reduce((prevHole, currHole) => {
                    return prevHole.par ? prevHole.par + currHole.par : prevHole + currHole.par
                })}</h6>
                <h6>{playerHoleScores.slice(9, 18)
                    .reduce((prevHole, currHole) => {
                    return prevHole.shots ? prevHole.shots + currHole.shots : prevHole + currHole.shots
                })}</h6>
                <h6>{playerHoleScores.slice(9, 18)
                    .map((holeScore, index) => holeScore.shots - playerHoles[index].par)
                    .reduce((prevScore, currScore) => prevScore + currScore)}</h6>
            </div>
        </div>
    )
}