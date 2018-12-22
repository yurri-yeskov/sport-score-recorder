import React from 'react'
import GolferCardHeader from './GolferCardHeader'
import GolferCardNine from './GolferCardNine'
import GolferCardTotals from './GolferCardTotals'

export default function GolferCard({golfer, currentHole}) {
    const holeScores = golfer.currentCourseScore.holeScores
    return (
        <div className='GolferCard'>
            <GolferCardHeader />
            <GolferCardNine 
                holeScores={holeScores} 
                front={true} 
                currentHole={currentHole}
            />
            <GolferCardNine 
                holeScores={holeScores} 
                front={false} 
                currentHole={currentHole}
            />
            <GolferCardTotals 
                holeScores={holeScores} 
                startHoleNum={0} 
                endHoleNum={18} 
                totalsRowLabel={'TOT'}
            />
        </div>
    )
}