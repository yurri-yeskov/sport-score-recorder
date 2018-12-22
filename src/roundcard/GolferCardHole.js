import React from 'react'
import GolfIncrementShots from '../actions/GolfIncrementShots'
import GolfDecrementShots from '../actions/GolfDecrementShots'

export default function GolferCardHole({holeScore, currentHole, updateCurrentHole}) {
    const score = holeScore.shots - holeScore.hole.par
    return (
        <div className={`GolferCardHole${currentHole ? ' currentHole' : ''}`}
            onClick={() => updateCurrentHole(holeScore.hole)}
        >
            <h6>{holeScore.hole.number}</h6>
            <h6>{holeScore.hole.par}</h6>
            <div className='golferCardHoleShots'>
                {(currentHole && holeScore.shots > 0) && <GolfDecrementShots holeScore={holeScore} />}
                <h6>{holeScore.shots === 0 ? '' : holeScore.shots}</h6>
                {currentHole && <GolfIncrementShots holeScore={holeScore} />}
            </div>
            <h6>{score !== 0 ? `${score > 0 ? '+' : ''}${score}` : 'E'}</h6>
        </div>
    )
}