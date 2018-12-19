import React from 'react'
import GolferScoreCardScoresNine from './GolferScoreCardScoresNine'

export default function GolferScoreCardScores(props) {
    return (
        <div className='GolferScoreCardScores'>
            <GolferScoreCardScoresNine {...props} frontNine={true}/>
            <GolferScoreCardScoresNine {...props} frontNine={false}/>
        </div>
    )
}