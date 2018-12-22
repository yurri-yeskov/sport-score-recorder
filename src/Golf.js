import React from 'react'
import { Route } from 'react-router-dom'
import LoadingPage from './LoadingPage'
import Gate from './Gate'
import Clubhouse from './Clubhouse'
import RoundForm from './RoundForm'
import Round from './Round';

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
                render={routeProps => <Round {...props} {...routeProps}/>}
            />
        </div>
    )
}