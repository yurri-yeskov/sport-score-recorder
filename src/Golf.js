import React from 'react'
import { Route } from 'react-router-dom'
import LoadingPage from './LoadingPage'
import Gate from './Gate'
import Clubhouse from './Clubhouse'
import RoundForm from './RoundForm'
import RoundCard from './roundcard/RoundCard';

export default function Golf(props) {
    return props.isLoading ? <LoadingPage /> : (
        <div className="Golf">
            <Route exact
                path="/login"
                render={routeProps => <Gate {...props} {...routeProps}/>}
            />
            <Route exact
                path="/clubhouse"
                render={routeProps => <Clubhouse {...props} {...routeProps}/>}
            />
            <Route exact
                path="/teetime"
                render={routeProps => <RoundForm {...props} {...routeProps}/>}
            />
            <Route
                path='/:filter?'
                render={routeProps => {
                    return (
                        <RoundCard
                            {...routeProps}
                            currentUser={props.golfer}
                            group={props.group} 
                            updateHoleScore={props.updateHoleScore}
                            updateCurrentHole={props.updateCurrentHole}
                        />
                    )
                }}
            />
        </div>
    )
}