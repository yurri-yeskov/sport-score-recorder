import React from 'react'
import GolfSearch from './GolfSearch'

export default function RoundForm({golfState, searchTerm, updateSearchTerm, addGroup}) {
    return (
        <div className="RoundForm">
            <div className="chooseCourseForm">
                <GolfSearch type='courses'
                    searchItems={golfState.courses} 
                    searchTerm={searchTerm}
                    updateSearchTerm={updateSearchTerm}
                />
            </div>
            <div className="chooseGolfersForm">
                <GolfSearch type='golfers'
                    searchItems={golfState.golfers} 
                    searchTerm={searchTerm}
                    updateSearchTerm={updateSearchTerm}
                />
            </div>
            <button onClick={() => addGroup({course: golfState.courses[0], golfers: [golfState.golfer]})}>tee off</button>
        </div>
    )
} 