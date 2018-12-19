import React from 'react'

export default function GolferScoreCard(props) {
    const playerHoles = props.holes.filter(hole => hole.course_id === props.currentCourse.id)
    const playerCourseScore = props.currentCourseScores.find(ccs => ccs.player_id === props.player.id)
    const playerHoleScores = props.holeScores.filter(holeScore => holeScore.course_score_id === playerCourseScore.id)
    return (
        <div className='GolferScoreCard'>
            <h1>{props.player.name}</h1>
            <div className='playerScores'>
                <div className='scoreCardHeaders'>
                    <h6>Hole #</h6>
                    <h6>Par</h6>
                    <h6>Shots</h6>
                    <h6>Score</h6>
                </div>
                <div className='scoreCardScores'>
                    {playerHoles.map(hole => {
                        const phs = playerHoleScores.find(holeScore => holeScore.hole_id === hole.id)
                        const playerScore = phs.shots - playerHoles.find(hole => hole.id === phs.hole_id).par
                        return (
                            <div key={phs.id} className='scoreCardHole'>
                                <h6>{hole.number}</h6>
                                <h6>{hole.par}</h6>
                                <h6>{phs.shots}</h6>
                                <h6>{playerScore}</h6>
                            </div>
                        )
                    })}
                </div>
                <div className='scoreCardTotals'>
                    <h6>IN</h6>
                    <h6>OUT</h6>
                    <h6>TOT</h6>
                </div>
            </div>
        </div>
    )
}