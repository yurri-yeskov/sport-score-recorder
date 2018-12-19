import React from 'react'

export default function GolferScoreCard(props) {
    const playerHoles = props.holes.filter(hole => hole.course_id === props.currentCourse.id)
    const playerCourseScore = props.currentCourseScores.find(ccs => ccs.player_id === props.player.id)
    const playerHoleScores = props.holeScores.filter(holeScore => holeScore.course_score_id === playerCourseScore.id)
    console.log(playerCourseScore, playerHoleScores)
    return (
        <div className='GolferScoreCard'>
            <h1>{props.player.name}</h1>
            <div className='playerScores'>
                <div className='scoreCardHoles'>
                    <h4>Hole #</h4>
                    {playerHoles.map(hole => <h6 key={hole.id}>{hole.number}</h6>)}
                </div>
                <div className='scoreCardPars'>
                    <h4>Par</h4>
                    {playerHoles.map(hole => <h6 key={hole.id}>{hole.par}</h6>)}
                </div>
                <div className='scoreCardShots'>
                    <h4>Shots</h4>
                    {playerHoleScores.map(phs=> <h6 key={phs.id}>{phs.shots}</h6>)}
                </div>
                <div className='scoreCardScores'>
                    <h4>Score</h4>
                    {playerHoleScores.map(phs => <h6 key={phs.id}>{phs.shots - playerHoles.find(hole => hole.id === phs.hole_id).par}</h6>)}
                </div>
            </div>
        </div>
    )
}