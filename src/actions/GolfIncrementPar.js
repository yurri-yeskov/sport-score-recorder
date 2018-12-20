import React from 'react'

export default function GolfIncrementPar({updateCurrentHole, hole}) {
    // get player
    // get course score
    // get current hole
    // get hole score
    return (
        <div className="GolfIncrementPar" onClick={() => updateCurrentHole({...hole, par: ++hole.par})}>
            <h6> + </h6>
        </div>
    )
}