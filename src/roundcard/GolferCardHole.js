import React from 'react'
import GolfIncrementShots from '../actions/GolfIncrementShots'
import GolfDecrementShots from '../actions/GolfDecrementShots'
// import GolfIncrementPar from '../actions/GolfIncrementPar'
// import GolfDecrementPar from '../actions/GolfDecrementPar' 

export default function GolferCardHole({holeScore, currentHole, updateHoleScore}) {
    return (
        <div className={`GolferCardHole${currentHole ? ' currentHole' : ''}`}>
            <h6>{holeScore.hole.number}</h6>
            <h6>{holeScore.hole.par}</h6>
            <div className='golferCardHoleShots'>
                {(currentHole && holeScore.shots > 0) && <GolfDecrementShots updateHoleScore={updateHoleScore} holeScore={holeScore} />}
                <h6>{holeScore.shots === 0 ? '' : holeScore.shots}</h6>
                {currentHole && <GolfIncrementShots updateHoleScore={updateHoleScore} holeScore={holeScore} />}
            </div>
            <h6>{holeScore.shots - holeScore.hole.par}</h6>
        </div>
    )
}