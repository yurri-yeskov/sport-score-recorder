import React from 'react'
import GolferScoreCardHeader from './GolferScoreCardHeader'
import GolferScoreCardScores from './GolferScoreCardScores'

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
                <div className='scoreCardTotals'>
                    <div className='scoreCardTotalsRow'>
                        <h6>TOT</h6>
                        <h6>{playerHoles.reduce((prevHole, currHole) => {
                            return prevHole.par ? prevHole.par + currHole.par : prevHole + currHole.par
                        })}</h6>
                        <h6>{playerHoleScores.reduce((prevHole, currHole) => {
                            return prevHole.shots ? prevHole.shots + currHole.shots : prevHole + currHole.shots
                        })}</h6>
                        <h6>{playerHoleScores.map((holeScore, index) => holeScore.shots - playerHoles[index].par)
                        .reduce((prevScore, currScore) => prevScore + currScore)}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}