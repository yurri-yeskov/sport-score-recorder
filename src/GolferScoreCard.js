import React from 'react'

export default function GolferScoreCard(props) {
    return (
        <div className='GolferScoreCard'>
            <h1>{props.player.name}</h1>
            <div className='playerScores'>
                <div className='scoreCardHoles'>
                    {props.holes.filter(hole => hole.course_id === props.currentCourse.id).map(hole => <h6>{hole.number}</h6>)}
                </div>
                <div className='scoreCardPars'>
                    {props.holes.filter(hole => hole.course_id === props.currentCourse.id).map(hole => <h6>{hole.par}</h6>)}
                </div>
                <div className='scoreCardScores'>
                    {props.holeScores.filter(holeScore => holeScore.course_score_id === props.currentCourseScores.find(courseScore => courseScore.player_id === props.player.id).id)
                        .map(chs=> <h6>{chs.score}</h6>)}
                </div>
                <div className='scoreCardResults'>
                </div>
            </div>
        </div>
    )
}