import React from 'react'

export default function GolfSearchPage(props) {
    return (
        <div className="GolfSearchPage">
            <label>{`${props.type} Search`}<input type='text' name={`${props.type}Name`}/></label>
            <input type='submit' value={`add ${props.type}`} onClick={() => {}}/>
            <button value='edit'/>
        </div>
    )
}