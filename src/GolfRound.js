import React from 'react'
import { Route } from 'react-router-dom'
import GolfRoundForm from './GolfRoundForm'
import GolfSearchPage from './GolfSearchPage'
import GolfScoreCard from './GolfScoreCard'

export default function GolfRound(props) {
    return (
        <div className="GolfRound">
            <Route
                path="/"
                render={routeProps => <GolfRoundForm {...props} />}
            />
            <Route
                path='/search/:type'
                render={routeProps => <GolfSearchPage {...props}/>}
            />
            <Route
                path='/play'
                render={routeProps => <GolfScoreCard {...props} />}
            />
        </div>
    )
}