import React from 'react'
import { Route } from 'react-router-dom'
// import GolfNav from './GolfNav'
// import GolfRoundForm from './GolfRoundForm'
import GolfRound from './GolfRound';

export default function GolfClubHouse(props) {
    return (
        <div className="GolfClubHouse">
            {/* <GolfNav {...props} />
            <Route exact
                path="/"
                render={routeProps => <GolfRoundForm {...props} {...routeProps}/>}
            /> */}
            <Route
                // path='/play'
                path='/:filter?'
                render={routeProps => <GolfRound {...props} {...routeProps}/>}
            />
        </div>
    )
}