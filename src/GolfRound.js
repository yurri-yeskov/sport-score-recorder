import React from 'react'
import { Route } from 'react-router-dom'
// import GolfNav from './GolfNav'
// import GolfRoundForm from './GolfRoundForm'
import GolfScoreCard from './GolfScoreCard'

export default function GolfRound(props) {
    return (
        <div className="GolfRound">
            {/* <GolfNav {...props} />
            <Route exact
                path="/"
                render={routeProps => <GolfRoundForm {...props} {...routeProps}/>}
            /> */}
            <Route
                // path='/play'
                path='/'
                render={routeProps => <GolfScoreCard {...props} {...routeProps}/>}
            />
        </div>
    )
}