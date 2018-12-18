import React from 'react'
import { Route } from 'react-router-dom'
import GolfNav from './GolfNav'
import GolfRoundForm from './GolfRoundForm'
import GolfSearchPage from './GolfSearchPage'
import GolfScoreCard from './GolfScoreCard'

export default function GolfRound(props) {
    return (
        <div className="GolfRound">
            <GolfNav {...props} />
            <Route exact
                path="/"
                render={routeProps => <GolfRoundForm {...props} {...routeProps}/>}
            />
            <Route
                path='/search/:type'
                render={routeProps => <GolfSearchPage {...props} {...routeProps}/>}
            />
            <Route
                path='/play'
                render={routeProps => <GolfScoreCard {...props} {...routeProps}/>}
            />
        </div>
    )
}