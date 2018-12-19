import React from 'react'
import GolferScoreCardScoresHeader from './GolferScoreCardScoresHeader'
import GolferScoreCardScoresNine from './GolferScoreCardScoresNine'
import GolferScoreCardTotals from './GolferScoreCardTotals'

export default function GolferScoreCardScores(props) {
    const {playerHoles, playerHoleScores} = props
    return (
        <div className='GolferScoreCardScores'>
            <GolferScoreCardScoresHeader {...props} />
            <GolferScoreCardScoresNine {...props} frontNine={true} playerHoles={playerHoles} playerHoleScores={playerHoleScores}/>
            <GolferScoreCardScoresNine {...props} frontNine={false} playerHoles={playerHoles} playerHoleScores={playerHoleScores}/>
            <GolferScoreCardTotals {...props} playerHoles={playerHoles} playerHoleScores={playerHoleScores} />
        </div>
    )
}