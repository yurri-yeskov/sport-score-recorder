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
    return (props.isLoading && <LoadingPage />) ||
    (   (props.location.pathname !== '/login' && !golfState.golfer._id && <Redirect to='/login'/>) ||
        (<div className="Golf">
            <GolfNav {...props} />
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
        </div>)
    )
}