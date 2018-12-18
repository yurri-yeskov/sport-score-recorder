import React from 'react'

export default function GolfSearchPage(props) {
    const { type } = props.match.params
    return (
        <div className="GolfSearchPage">
            <label>{`${type} search`}<input type='text' name={`${type}Name`}/></label>
            <Link to={`${type}/${golfSearchTerm}`}/>
        </div>
    )
}