import React from 'react'
import GolferCardHoles from './GolferCardHoles'
import GolferCardTotals from './GolferCardTotals';

export default function GolferCardNine({front, holeScores, currentHole, updateCurrentHole, updateHoleScore, isCurrentUser}) {
    const startHoleNum = front ? 0 : 9
    const endHoleNum = front ? 9 : 18
    const totalsRowLabel = front ? 'IN' : 'OUT'
    return (
        <div className='GolferCardNine'>
            <GolferCardHoles 
                holeScores={holeScores} 
                startHoleNum={startHoleNum} 
                endHoleNum={endHoleNum}
                currentHole={currentHole}
                updateCurrentHole={updateCurrentHole}
                updateHoleScore={updateHoleScore}
                isCurrentUser={isCurrentUser}
            />
            <GolferCardTotals 
                holeScores={holeScores} 
                startHoleNum={startHoleNum} 
                endHoleNum={endHoleNum} 
                totalsRowLabel={totalsRowLabel}
            />
        </div>
    )
}