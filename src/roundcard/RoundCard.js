import React from 'react'
import GolferCard from './GolferCard'

export default function Round({group, updateHoleScore, updateCurrentHole}) {
    return (
        <div className="RoundCard">
            {group.golfers.map(golfer => {
                return (
                    <GolferCard key={golfer.id} 
                        golfer={golfer}
                        currentHole={group.hole}
                        updateHoleScore={updateHoleScore}
                        updateCurrentHole={updateCurrentHole}
                    />
                )
            })}
        </div>  
    )
}  