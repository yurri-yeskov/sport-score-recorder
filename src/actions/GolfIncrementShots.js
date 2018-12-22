import React from 'react'

export default function GolfIncrementShots({updateCurrentHoleScore, holeScore}) {
    // get player
    // get course score
    // get current hole
    // get hole score
    return (
        <div className="GolfIncrementShots" onClick={() => {
                updateCurrentHoleScore({...holeScore, shots: ++holeScore.shots})
            }}
        >
            <h6> + </h6>
        </div>
    )
}