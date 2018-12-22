import React from 'react'
import { Route } from 'react-router-dom'
import Leaderboard from './Leaderboard'
import GolferCard from './GolferCard'

export default function RoundCard({currentUser, group, updateHoleScore, updateCurrentHole}) {
    return (
        <div className="RoundCard">
            <Route exact path=''
            render={routeProps => {
                return (
                    <Leaderboard group={group}/>
                )
            }}/>
            {group.golfers.map(golfer => {
                return (
                    <Route key={golfer.id}
                        exact path={`/${golfer.name}`}
                        render={routeProps => {
                            return (
                                <GolferCard key={golfer.id} 
                                    golfer={golfer}
                                    currentHole={group.hole}
                                    updateHoleScore={updateHoleScore}
                                    updateCurrentHole={updateCurrentHole}
                                    isCurrentUser={currentUser.id === golfer.id}
                                />
                            )
                        }}
                    />
                )
            })}
        </div>  
    )
}  