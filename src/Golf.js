import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoadingPage from './LoadingPage'
import Gate from './Gate'
import GolfNav from './GolfNav'
import Clubhouse from './Clubhouse'
import RoundForm from './RoundForm'
import RoundCard from './roundcard/RoundCard';

export default function Golf(props) {
    const {golfState} = props
    const isLoggedIn = golfState.golfer && golfState.golfer._id
    const isPlayingRound = isLoggedIn && golfState.golfer.currentCourseScore
    // page is loading
    return (props.isLoading && <LoadingPage />) ||
    // not logged in or at login page
    ((!isLoggedIn && (props.location.pathname !== '/login' && <Redirect to='/login'/>)) ||
    // logged in but not playing round or at clubhouse
    // not at teetime either
    ((isLoggedIn && !isPlayingRound) && ((props.location.pathname !== '/clubhouse' && props.location.pathname !== '/teetime') && <Redirect to='/clubhouse'/>)) ||
        (<div className="Golf">
            <GolfNav {...props} />
            <Switch>
                <Route exact
                    path="/login"
                    render={routeProps => <Gate loginGolfer={props.loginGolfer} addGolfer={props.addGolfer}/>}
                />
                <Route exact
                    path="/clubhouse"
                    render={routeProps => <Clubhouse golfState={golfState} />}
                />
                <Route exact
                    path="/teetime"
                    render={routeProps => {
                        return (
                            <RoundForm golfState={golfState} 
                                searchTerm={props.searchTerm} 
                                updateSearchTerm={props.updateSearchTerm} 
                                addGroup={props.addGroup}
                            />
                        )
                    }} 
                />
                <Route
                    path='/:filter?'
                    render={routeProps => {
                        return (
                            <RoundCard
                                {...routeProps}
                                currentUser={golfState.golfer}
                                group={golfState.group} 
                                updateHoleScore={props.updateHoleScore}
                                updateCurrentHole={props.updateCurrentHole}
                            />
                        )
                    }}
                />
            </Switch>
        </div>)
    )
}