import React from 'react'
import GolferScoreCardHeader from './GolferScoreCardHeader'
import GolferScoreCardScores from './GolferScoreCardScores'
import GolferScoreCardTotals from './GolferScoreCardTotals';

export default function GolferScoreCard(props) {
    const {player, holes, currentCourse, currentCourseScores, holeScores} = props
    const playerHoles = holes.filter(hole => hole.course_id === currentCourse.id)
    const playerCourseScore = currentCourseScores.find(ccs => ccs.player_id === player.id)
    const playerHoleScores = holeScores.filter(holeScore => holeScore.course_score_id === playerCourseScore.id)
    return (
        <div className='GolferScoreCard'>
            <h1>{player.name}</h1>
            <div className='playerScores'>
                <GolferScoreCardHeader {...props} />
                <GolferScoreCardScores {...props} playerHoles={playerHoles} playerHoleScores={playerHoleScores} />
                <GolferScoreCardTotals {...props} playerHoles={playerHoles} playerHoleScores={playerHoleScores} />
            </div>
        </div>
    )
}