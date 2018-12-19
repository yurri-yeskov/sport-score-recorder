import React from 'react'
import GolferScoreCardHeader from './GolferScoreCardHeader'
import GolferScoreCardScores from './GolferScoreCardScores'

export default function GolfScoreCard(props) {
    const {player, holes, currentCourse, currentCourseScores, holeScores} = props
    const playerHoles = holes.filter(hole => hole.course_id === currentCourse.id)
    const playerCourseScore = currentCourseScores.find(ccs => ccs.player_id === player.id)
    const playerHoleScores = holeScores.filter(holeScore => holeScore.course_score_id === playerCourseScore.id)
    return (
        <div className='GolfScoreCard'>
            <GolferScoreCardHeader {...props} />
            <GolferScoreCardScores {...props} playerHoles={playerHoles} playerHoleScores={playerHoleScores}/>
        </div>
    )
}