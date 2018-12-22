import React from 'react'
import {updateHoleScore} from '../store'

export default function GolfDecrementShots({holeScore}) {
    // get player
    // get course score
    // get current hole
    // get hole score
    return (
        <div className="GolfDecrementShots" onClick={() => {
            updateHoleScore({...holeScore, shots: --holeScore.shots})
        }}>
            <h6> - </h6>
        </div>
    )
}