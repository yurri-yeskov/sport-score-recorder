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
    console.log(golfState.golfer)
    const isPlayingRound = isLoggedIn && golfState.golfer.currentCourseScore._id
    let changingPath
    if (isLoggedIn) {
        if (!isPlayingRound) {
            console.log('not playing round')
            if (props.location.pathname !== '/clubhouse') {   
                changingPath = <Redirect to='/clubhouse'/>
            }
        }
    } else {
        console.log('not logged in')
        if (props.location.pathname !== '/login') {
            changingPath = <Redirect to='/login'/>
        }
    }
    console.log(golfState)
    return (props.isLoading && <LoadingPage />) ||
    ( changingPath ||
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