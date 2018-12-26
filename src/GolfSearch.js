import React from 'react'
import { Link } from 'react-router-dom'

export default function GolfSearch({type, searchItems, searchTerm, updateSearchTerm}) {
    const searchResults = searchItems.filter(searchItem => searchItem.name && searchItem.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(searchItem => <h1 key={searchItem.id || searchItem._id}>{searchItem.name}</h1>)
    return (
        <div className="GolfSearch">
            <label>
                {`${type} search`}
                <input type='text' 
                name={`${type}Name`} 
                value={searchTerm}
                onChange={event => updateSearchTerm(event.target.value)}/>
            </label>
            {searchResults.length > 0 ? searchResults : <Link to='/addCourse'>add course</Link> }
        </div>
    )
}