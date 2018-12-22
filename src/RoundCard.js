import React from 'react'
import GolferCard from './scorecard/GolferCard'

export default function Round({group}) {
    return (
        <div className="Round">
            {group.golfers.map(golfer => {
                return (
                    <GolferCard key={golfer.id} 
                        golfer={golfer}
                        currentHole={group.hole}
                    />
                )
            })}
        </div>
    )
}