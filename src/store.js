import { createStore } from 'redux';
import uuid from 'uuid/v4'

// set up default state
const defaultState = {
    courses: [{id: 1, name: 'Golf Course'}], // all the courses
    holes: [
        {id: 3, course_id: 1, number: 1, par: 3},
        {id: 4, course_id: 1, number: 2, par: 4},
        {id: 5, course_id: 1, number: 3, par: 5},
        {id: 6, course_id: 1, number: 4, par: 4},
        {id: 7, course_id: 1, number: 5, par: 5},
        {id: 8, course_id: 1, number: 6, par: 3},
        {id: 9, course_id: 1, number: 7, par: 4},
        {id: 10, course_id: 1, number: 8, par: 3},
        {id: 11, course_id: 1, number: 9, par: 5},
        {id: 12, course_id: 1, number: 10, par: 4},
        {id: 13, course_id: 1, number: 11, par: 3},
        {id: 14, course_id: 1, number: 12, par: 5},
        {id: 15, course_id: 1, number: 13, par: 4},
        {id: 16, course_id: 1, number: 14, par: 4},
        {id: 17, course_id: 1, number: 15, par: 3},
        {id: 18, course_id: 1, number: 16, par: 3},
        {id: 19, course_id: 1, number: 17, par: 5},
        {id: 20, course_id: 1, number: 18, par: 5},
    ], // all the holes
    players: [{id: 2, name: 'Player 1'}], // all the players
    courseScores: [{id: 21, course_id: 1, player_id: 2}], // all the scores
    holeScores: [
        {id: 22, course_score_id: 21, hole_id: 3, shots: 4},
        {id: 23, course_score_id: 21, hole_id: 4, shots: 3},
        {id: 24, course_score_id: 21, hole_id: 5, shots: 5},
        {id: 25, course_score_id: 21, hole_id: 6, shots: 3},
        {id: 26, course_score_id: 21, hole_id: 7, shots: 4},
        {id: 27, course_score_id: 21, hole_id: 8, shots: 5},
        {id: 28, course_score_id: 21, hole_id: 9, shots: 3},
        {id: 29, course_score_id: 21, hole_id: 10, shots: 5},
        {id: 30, course_score_id: 21, hole_id: 11, shots: 4},
        {id: 31, course_score_id: 21, hole_id: 12, shots: 4},
        {id: 32, course_score_id: 21, hole_id: 13, shots: 3},
        {id: 33, course_score_id: 21, hole_id: 14, shots: 5},
        {id: 34, course_score_id: 21, hole_id: 15, shots: 6},
        {id: 35, course_score_id: 21, hole_id: 16, shots: 5},
        {id: 36, course_score_id: 21, hole_id: 17, shots: 4},
        {id: 37, course_score_id: 21, hole_id: 18, shots: 3},
        {id: 38, course_score_id: 21, hole_id: 19, shots: 4},
        {id: 39, course_score_id: 21, hole_id: 20, shots: 4},
    ], // all the hole scores
    currentCourse: {id: 1, name: 'Golf Course'}, // the current course
    // currentHole: {},
    currentPlayers: [{id: 2, name: 'Player 1'}], // the current players
    currentCourseScores: [{id: 21, course_id: 1, player_id: 2}], // the current scores
    // currentHoleScores: [], 
    // searchTerm: ''
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
const UPDATE_SEARCH_TERM = {
    type: 'UPDATE_SEARCH_TERM'
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
export const addHole = ({course_id, number, par}) => {
    return {
        ...ADD_HOLE,
        newHole: {
            id: uuid(),
            course_id,
            number,
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
export const addHoleScore = ({course_score_id, hole_id, shots}) => {
    return {
        ...ADD_HOLE_SCORE,
        newHoleScore: {
            id: uuid(),
            course_score_id, 
            hole_id,
            shots
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
export const updateHole = ({id, course_id, number, par}) => {
    return {
        ...UPDATE_HOLE,
        updatedHole: {
            id,
            course_id,
            number,
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
export const updateHoleScore = ({id, course_score_id, hole_id, shots}) => {
    return {
        ...UPDATE_HOLE_SCORE,
        updatedHoleScore: {
            id,
            course_score_id,
            hole_id,
            shots
        }
    }
}
export const updateSearchTerm = ({updatedSearchTerm}) => {
    return {
        ...UPDATE_SEARCH_TERM,
        updatedSearchTerm
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
export const deleteHole = ({id, course_id, number, par}) => {
    return {
        ...DELETE_HOLE,
        holeToDelete: {
            id,
            course_id,
            number,
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
export const deleteHoleScore = ({id, course_score_id, hole_id, shots}) => {
    return {
        ...DELETE_HOLE_SCORE,
        holeScoreToDelete: {
            id,
            course_score_id,
            hole_id,
            shots
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
            ...state,
            courses: [
                ...state.courses,
                action.newCourse
            ]
        }
        case ADD_HOLE.type:
        return {
            ...state,
            holes: [
                ...state.holes,
                action.newHole
            ]
        }
        case ADD_PLAYER.type:
        return {
            ...state,
            players: [
                ...state.players,
                action.newPlayer
            ]
        }
        case ADD_COURSE_SCORE.type:
        return {
            ...state,
            courseScores: [
                ...state.courseScores,
                action.newCourseScore
            ]
        }
        case ADD_HOLE_SCORE.type:
        return {
            ...state,
            holeScores: [
                ...state.holeScores,
                action.newHoleScore
            ]
        }
        // Update
        case UPDATE_COURSE.type:
        return {
            ...state,
            courses: state.courses.map(course => {
                if (course.id === action.updatedCourse.id) {
                    return action.updatedCourse
                } else {
                    return course
                }
            })
        }
        case UPDATE_HOLE.type:
        return {
            ...state,
            holes: state.holes.map(hole => {
                if (hole.id === action.updatedHole.id) {
                    return action.updatedHole
                } else {
                    return hole
                }
            })
        }
        case UPDATE_PLAYER.type:
        return {
            ...state,
            players: state.players.map(player => {
                if (player.id === action.updatedPlayer.id) {
                    return action.updatedPlayer
                } else {
                    return player
                }
            })
        }
        case UPDATE_COURSE_SCORE.type:
        return {
            ...state,
            courseScores: state.courseScores.map(courseScore => {
                if (courseScore.id === action.updatedCourseScore.id) {
                    return action.updatedCourseScore
                } else {
                    return courseScore
                }
            })
        }
        case UPDATE_HOLE_SCORE.type:
        return {
            ...state,
            holeScores: state.holeScores.map(holeScore => {
                if (holeScore.id === action.updatedHoleScore.id) {
                    return action.updatedHoleScore
                } else {
                    return holeScore
                }
            })
        }
        case UPDATE_SEARCH_TERM.type:
        return {
            ...state,
            searchTerm: action.updatedSearchTerm
        }
        // Delete
        case DELETE_COURSE.type:
        return {
            ...state,
            courses: state.courses.filter(course => course.id !== action.courseToDelete.id)
        }
        case DELETE_HOLE.type:
        return {
            ...state,
            holes: state.holes.filter(hole => hole.id !== action.holeToDelete.id)
        }
        case DELETE_PLAYER.type:
        return {
            ...state,
            players: state.players.filter(player => player.id !== action.playerToDelete.id)
        }
        case DELETE_COURSE_SCORE.type:
        return {
            ...state,
            courseScores: state.courseScores.filter(courseScore => courseScore.id !== action.courseScoreToDelete.id)
        }
        case DELETE_HOLE_SCORE.type:
        return {
            ...state,
            holeScores: state.holeScores.filter(holeScore => holeScore.id !== action.holeScoreToDelete.id)
        }
        default:
        return state
    }
}

const store = createStore(
    scorecard,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store