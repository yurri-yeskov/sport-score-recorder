import React from 'react'
import GolferScoreCardScoresNineHoles from './GolferScoreCardScoresNineHoles'
import GolferScoreCardScoresNineTotals from './GolferScoreCardScoresNineTotals';

export default function GolferScoreCardScoresNine(props) {
    const {frontNine} = props
    const startHoleNum = frontNine ? 0 : 9
    const endHoleNum = frontNine ? 9 : 18
    const totalsRowLabel = frontNine? 'IN' : 'OUT'
    return (
        <div className='GolferScoreCardScoresNine'>
            <GolferScoreCardScoresNineHoles {...props} startHoleNum={startHoleNum} endHoleNum={endHoleNum}/>
            <GolferScoreCardScoresNineTotals {...props} startHoleNum={startHoleNum} endHoleNum={endHoleNum} totalsRowLabel={totalsRowLabel}/>
        </div>
    )
}