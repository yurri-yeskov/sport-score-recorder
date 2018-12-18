import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import { stat } from 'fs';
import { createStore } from 'redux';

// set up default state
const defaultState = {
    courses: [],
    players: [],
    holes: [],
    courseScores: [],
    holeScores: [],
    currentCourse: {},
    currentPlayers: [],
    currentHole: {},
    currentCourseScores: [],
    currentHoleScores: []
}

// action types
const ADD_COURSE = {
    type: 'ADD_COURSE'
}
const ADD_HOLE = {
    type: 'ADD_HOLE'
}
const ADD_PLAYER = {
    type: 'ADD_PLAYER'
}
const ADD_COURSE_SCORE = {
    type: 'ADD_COURSE_SCORE'
}
const ADD_HOLE_SCORE = {
    type: 'ADD_HOLE_SCORE'
}

// action methods
export const addCourse = ({name}) => {
    return {
        ...ADD_COURSE,
        newCourse: {
            id: uuid(),
            name
        }
    }
}
export const addHole = ({course_id, par}) => {
    return {
        ...ADD_HOLE,
        newHole: {
            id: uuid(),
            course_id,
            par
        }
    }
}
export const addPlayer = ({name}) => {
    return {
        ...ADD_PLAYER,
        newPlayer: {
            id: uuid(),
            name
        }
    }
}
export const addCourseScore = ({player_id, course_id}) => {
    return {
        ...ADD_COURSE_SCORE,
        newCourseScore: {
            id: uuid(),
            player_id,
            course_id
        }
    }
}
export const addHoleScore = ({course_score_id, hole_id, score}) => {
    return {
        ...ADD_HOLE_SCORE,
        newHoleScore: {
            id: uuid(),
            course_score_id, 
            hole_id,
            score
        }
    }
}

// reducer

const scorecard = (state=defaultState, action) => {
    if (!action) {
        return state
    }
    switch (action.type){

        case ADD_COURSE.type:
        return {
            courses: [
                ...state.courses,
                action.newCourse
            ]
        }
        case ADD_HOLE.type:
        return {
            holes: [
                ...state.holes,
                action.newHole
            ]
        }
        case ADD_PLAYER.type:
        return {
            players: [
                ...state.players,
                action.newPlayer
            ]
        }
        case ADD_COURSE_SCORE.type:
        return {
            courseScores: [
                ...state.courseScores,
                action.newCourseScore
            ]
        }
        case ADD_HOLE_SCORE.type:
        return {
            holeScores: [
                ...state.holeScores,
                action.newHoleScore
            ]
        }
        default:
        return state
    }
}

export default const store = createStore(
    scorecard,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)