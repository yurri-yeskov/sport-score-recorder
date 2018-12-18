import React from 'react'

export default function GolfSearchPage(props) {
    const { type } = props.match.params
    return (
        <div className="GolfSearchPage">
            <label>{`${type} Search`}<input type='text' name={`${type}Name`}/></label>
            <input type='submit' value={`add ${type}`} onClick={() => {}}/>
            <button value='edit'/>
        </div>
    )
}