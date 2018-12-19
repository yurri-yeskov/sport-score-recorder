import React from 'react'
import { Link } from 'react-router-dom'

export default function GolferScoreCardScoresHeader(props) {
    return (
    <div className='GolferScoreCardScoresHeader'>
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
    )
}