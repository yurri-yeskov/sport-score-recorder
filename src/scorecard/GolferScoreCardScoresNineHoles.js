import React from 'react'
import GolferScoreCardHole from './GolferScoreCardHole'

export default function GolferScoreCardScoresNineHoles(props) {
    const {golferHoles, golferHoleScores, startHoleNum, endHoleNum} = props
    return (
        <div className='GolferScoreCardScoresNineHoles'>
            {golferHoles.slice(startHoleNum, endHoleNum)
            .map(hole => {
                const phs = golferHoleScores.find(holeScore => holeScore.hole_id === hole.id)
                return (
                <GolferScoreCardHole key={phs.id} {...props}
                hole={hole}
                phs={phs}
                golferScore={phs.shots - golferHoles.find(hole => hole.id === phs.hole_id).par}
                />
                )
            })}
        </div>
    )
}