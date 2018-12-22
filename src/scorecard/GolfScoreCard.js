import React from 'react'
import GolferScoreCardHeader from './GolferScoreCardHeader'
import GolferScoreCardScores from './GolferScoreCardScores'

export default function GolfScoreCard(props) {
    const {golfer, holes, currentCourse, currentCourseScores, currentHoleScores} = props
    const golferHoles = holes.filter(hole => hole.course_id === currentCourse.id)
    const golferCourseScore = currentCourseScores.find(ccs => ccs.golfer_id === golfer.id)
    const golferHoleScores = currentHoleScores.filter(holeScore => holeScore.course_score_id === golferCourseScore.id)
    return (
        <div className='GolfScoreCard'>
            <GolferScoreCardHeader {...props} golferHoleScores={golferHoleScores}/>
            <GolferScoreCardScores {...props} golferHoles={golferHoles} golferHoleScores={golferHoleScores}/>
        </div>
    )
}