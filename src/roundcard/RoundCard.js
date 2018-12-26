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
                console.log(golfer._id)
                return (
                    <Route key={golfer._id}
                        exact path={`/${golfer.name}`}
                        render={routeProps => {
                            return (
                                <GolferCard key={golfer._id} 
                                    golfer={golfer}
                                    currentHole={group.hole}
                                    updateHoleScore={updateHoleScore}
                                    updateCurrentHole={updateCurrentHole}
                                    isCurrentUser={currentUser._id === golfer._id}
                                />
                            )
                        }}
                    />
                )
            })}
        </div>  
    )
}  