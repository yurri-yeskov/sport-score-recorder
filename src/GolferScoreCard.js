import React from 'react'
import { Route, Link } from 'react-router-dom'
import GolferScoreCardHole from './GolferScoreCardHole'


export default function GolferScoreCard(props) {
    const {player, holes, currentCourse, currentCourseScores, holeScores} = props
    const playerHoles = holes.filter(hole => hole.course_id === currentCourse.id)
    const playerCourseScore = currentCourseScores.find(ccs => ccs.player_id === player.id)
    const playerHoleScores = holeScores.filter(holeScore => holeScore.course_score_id === playerCourseScore.id)
    return (
        <div className='GolferScoreCard'>
            <h1>{player.name}</h1>
            <div className='playerScores'>
                <div className='scoreCardHeaders'>
                    <h6>Hole #</h6>
                    <Link to={props.location.pathname.includes(`editPar`) ?
                        `${props.location.pathname.replace(`/editPar/`, '/')}` :
                        `/editPar${props.location.pathname}`}>
                        <h6>Par</h6>
                    </Link>
                    <Link to={props.location.pathname.includes(`editShots`) ?
                        `${props.location.pathname.replace(`/editShots/`, '/')}` :
                        `/editShots${props.location.pathname}`}>
                        <h6>Shots</h6>
                    </Link>
                    <h6>Score</h6>
                </div>
                <div className='scoreCardScores'>
                    {playerHoles.map(hole => {
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
                <div className='scoreCardTotals'>
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