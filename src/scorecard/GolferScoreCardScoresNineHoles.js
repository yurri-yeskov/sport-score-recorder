import React from 'react'
import GolferScoreCardHole from './GolferScoreCardHole'

export default function GolferScoreCardScoresNineHoles(props) {
    const {playerHoles, playerHoleScores, startHoleNum, endHoleNum} = props
    return (
        <div className='GolferScoreCardScoresNineHoles'>
            {playerHoles.slice(startHoleNum, endHoleNum)
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
        </div>
    )
}