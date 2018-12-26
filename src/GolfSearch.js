import React from 'react'

export default function GolfSearch({type, searchItems, searchTerm, updateSearchTerm}) {
    return (
        <div className="GolfSearch">
            <label>
                {`${type} search`}
                <input type='text' 
                name={`${type}Name`} 
                value={searchTerm}
                onChange={event => updateSearchTerm({updatedSearchTerm: event.target.value})}/>
            </label>
            {searchItems.filter(searchItem => searchItem.name && searchItem.name.includes(searchTerm))
                .map(searchItem => <h1 key={searchItem.id || searchItem._id}>{searchItem.name}</h1>)}
        </div>
    )
}