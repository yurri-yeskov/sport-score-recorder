import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoadingPage from './LoadingPage'
import Gate from './Gate'
import Clubhouse from './Clubhouse'
import RoundForm from './RoundForm'
import RoundCard from './roundcard/RoundCard';

export default function Golf(props) {
    console.log('at main app page')
    const {golfState} = props
    return (props.isLoading && <LoadingPage />) ||
    ((!golfState.golfer._id && props.location.pathname !== '/login') && <Redirect to='/login'/>) ||
    ((!golfState.golfer.currentCourseScore && 
        (props.location.pathname !== '/clubhouse' && props.location.pathname !== '/teetime')) && 
        <Redirect to='/clubhouse'/>) ||
    (
        <div className="Golf">
            <Switch>
                <Route exact
                    path="/login"
                    render={routeProps => <Gate loginGolfer={props.loginGolfer}/>}
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
        </div>
    )
}