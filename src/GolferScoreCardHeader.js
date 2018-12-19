import React from 'react'

export default function GolferScoreCardHeader(props) {
    const {player} = props
    return (
        <div className='GolferScoreCardHeader'>
            <h1>{player.name}</h1> 
        </div>
    )
}