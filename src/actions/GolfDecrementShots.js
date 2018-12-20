import React from 'react'

export default function GolfDecrementShots({updateCurrentHoleScore, phs}) {
    // get player
    // get course score
    // get current hole
    // get hole score
    return (
        <div className="GolfDecrementShots" onClick={() => {
            updateCurrentHoleScore({...phs, shots: --phs.shots})
        }}>
            <h6> - </h6>
        </div>
    )
}