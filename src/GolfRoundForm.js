import React from 'react'
import GolfSearchPage from './GolfSearchPage';

export default function GolfRoundForm(props) {
    return (
        <div className="GolfRoundForm">
            <GolfSearchPage type='courses' {...props}/>
            <GolfSearchPage type='players' {...props}/>
        </div>
    )
}