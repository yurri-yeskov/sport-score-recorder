import React from 'react'
import GolferCardHole from './GolferCardHole'

export default function GolferCardHoles({holeScores, startHoleNum, endHoleNum, currentHole, updateHoleScore}) {
    return (
        <div className='GolferCardHoles'>
            {holeScores.slice(startHoleNum, endHoleNum)
                .map(holeScore => {
                    return (
                        <GolferCardHole key={holeScore.id}
                            holeScore={holeScore}
                            currentHole={holeScore.hole.id === currentHole.id}
                            updateHoleScore={updateHoleScore}
                        />
                    )
                })
            }
        </div>
    )
}