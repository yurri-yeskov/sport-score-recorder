import React from 'react'

export default function GolfIncrementShots({holeScore, updateHoleScore}) {
    // get player
    // get course score
    // get current hole
    // get hole score
    return (
        <div className="GolfIncrementShots" onClick={event => {
                event.stopPropagation()
                updateHoleScore({...holeScore, shots: ++holeScore.shots})
            }}
        >
            <h6> + </h6>
        </div>
    )
}