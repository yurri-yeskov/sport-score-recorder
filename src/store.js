import { createStore } from 'redux';
import uuid from 'uuid/v4'

// set up default state
const defaultState = {
    courses: [],
    holes: [],
    players: [],
    courseScores: [],
    holeScores: [],
    currentCourse: {},
    currentHole: {},
    currentPlayers: [],
    currentCourseScores: [],
    currentHoleScores: []
}

// action types
// Create
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
// Update
const UPDATE_COURSE = {
    type: 'UPDATE_COURSE'
}
const UPDATE_HOLE = {
    type: 'UPDATE_HOLE'
}
const UPDATE_PLAYER = {
    type: 'UPDATE_PLAYER'
}
const UPDATE_COURSE_SCORE = {
    type: 'UPDATE_COURSE_SCORE'
}
const UPDATE_HOLE_SCORE = {
    type: 'UPDATE_HOLE_SCORE'
}
// Delete
const DELETE_COURSE = {
    type: 'DELETE_COURSE'
}
const DELETE_HOLE = {
    type: 'DELETE_HOLE'
}
const DELETE_PLAYER = {
    type: 'DELETE_PLAYER'
}
const DELETE_COURSE_SCORE = {
    type: 'DELETE_COURSE_SCORE'
}
const DELETE_HOLE_SCORE = {
    type: 'DELETE_HOLE_SCORE'
}

// action methods
// Create
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
// Update
export const updateCourse = ({id, name}) => {
    return {
        ...UPDATE_COURSE,
        updatedCourse: {
            id,
            name
        }
    }
}
export const updateHole = ({id, course_id, par}) => {
    return {
        ...UPDATE_HOLE,
        updatedHole: {
            id,
            course_id,
            par
        }
    }
}
export const updatePlayer = ({id, name}) => {
    return {
        ...UPDATE_PLAYER,
        updatedPlayer: {
            id,
            name
        }
    }
}
export const updateCourseScore = ({id, course_id, player_id}) => {
    return {
        ...UPDATE_COURSE_SCORE,
        updatedCourseScore: {
            id,
            course_id,
            player_id
        }
    }
}
export const updateHoleScore = ({id, course_score_id, hole_id, score}) => {
    return {
        ...UPDATE_HOLE_SCORE,
        updatedHoleScore: {
            id,
            course_score_id,
            hole_id,
            score
        }
    }
}
// Delete
export const deleteCourse = ({id, name}) => {
    return {
        ...DELETE_COURSE,
        courseToDelete: {
            id,
            name
        }
    }
}
export const deleteHole = ({id, course_id, par}) => {
    return {
        ...DELETE_HOLE,
        holeToDelete: {
            id,
            course_id,
            par
        }
    }
}
export const deletePlayer = ({id, name}) => {
    return {
        ...DELETE_PLAYER,
        playerToDelete: {
            id,
            name
        }
    }
}
export const deleteCourseScore = ({id, course_id, player_id}) => {
    return {
        ...DELETE_COURSE_SCORE,
        courseScoreToDelete: {
            id,
            course_id,
            player_id
        }
    }
}
export const deleteHoleScore = ({id, course_score_id, hole_id, score}) => {
    return {
        ...DELETE_HOLE_SCORE,
        holeScoreToDelete: {
            id,
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
        // Create
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
        // Update

        // Delete

        default:
        return state
    }
}

const store = createStore(
    scorecard,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store