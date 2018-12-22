import { createStore } from 'redux'
import uuid from 'uuid/v4'

// set up default state
const defaultState = {
    golfer: {id: 2, name: 'collin', courseScores: [], 
        currentCourseScore: {id: 21, holeScores: [
            {id: 22, hole: {id: 3, number: 1, par: 3}, shots: 4},
            {id: 23, hole: {id: 4, number: 2, par: 4}, shots: 3},
            {id: 24, hole: {id: 5, number: 3, par: 5}, shots: 5},
            {id: 25, hole: {id: 6, number: 4, par: 4}, shots: 3},
            {id: 26, hole: {id: 7, number: 5, par: 5}, shots: 4},
            {id: 27, hole: {id: 8, number: 6, par: 3}, shots: 5},
            {id: 28, hole: {id: 9, number: 7, par: 4}, shots: 3},
            {id: 29, hole: {id: 10, number: 8, par: 3}, shots: 5},
            {id: 30, hole: {id: 11, number: 9, par: 5}, shots: 4},
            {id: 31, hole: {id: 12, number: 10, par: 4}, shots: 4},
            {id: 32, hole: {id: 13, number: 11, par: 3}, shots: 3},
            {id: 33, hole: {id: 14, number: 12, par: 5}, shots: 5},
            {id: 34, hole: {id: 15, number: 13, par: 4}, shots: 6},
            {id: 35, hole: {id: 16, number: 14, par: 4}, shots: 5},
            {id: 36, hole: {id: 17, number: 15, par: 3}, shots: 4},
            {id: 37, hole: {id: 18, number: 16, par: 3}, shots: 3},
            {id: 38, hole: {id: 19, number: 17, par: 5}, shots: 4},
            {id: 39, hole: {id: 20, number: 18, par: 5}, shots: 4},
        ]},
    }, // logged in golfer
    searchTerm: '',
    searchResults: [], // golfer or courses that match searchterm
    edit: {}, // object to edit, course/golfer
    group: {
        // current golfers
        golfers: [{id: 2, name: 'collin', courseScores: [], 
                currentCourseScore: {id: 21, holeScores: [
                    {id: 22, hole: {id: 3, number: 1, par: 3}, shots: 4},
                    {id: 23, hole: {id: 4, number: 2, par: 4}, shots: 3},
                    {id: 24, hole: {id: 5, number: 3, par: 5}, shots: 5},
                    {id: 25, hole: {id: 6, number: 4, par: 4}, shots: 3},
                    {id: 26, hole: {id: 7, number: 5, par: 5}, shots: 4},
                    {id: 27, hole: {id: 8, number: 6, par: 3}, shots: 5},
                    {id: 28, hole: {id: 9, number: 7, par: 4}, shots: 3},
                    {id: 29, hole: {id: 10, number: 8, par: 3}, shots: 5},
                    {id: 30, hole: {id: 11, number: 9, par: 5}, shots: 4},
                    {id: 31, hole: {id: 12, number: 10, par: 4}, shots: 4},
                    {id: 32, hole: {id: 13, number: 11, par: 3}, shots: 3},
                    {id: 33, hole: {id: 14, number: 12, par: 5}, shots: 5},
                    {id: 34, hole: {id: 15, number: 13, par: 4}, shots: 6},
                    {id: 35, hole: {id: 16, number: 14, par: 4}, shots: 5},
                    {id: 36, hole: {id: 17, number: 15, par: 3}, shots: 4},
                    {id: 37, hole: {id: 18, number: 16, par: 3}, shots: 3},
                    {id: 38, hole: {id: 19, number: 17, par: 5}, shots: 4},
                    {id: 39, hole: {id: 20, number: 18, par: 5}, shots: 4},
                ]},
            },
        ],
        course: {id: 1, name: 'Whispering Pines', holes: [ // current course
            {id: 3, number: 1, par: 3},
            {id: 4, number: 2, par: 4},
            {id: 5, number: 3, par: 5},
            {id: 6, number: 4, par: 4},
            {id: 7, number: 5, par: 5},
            {id: 8, number: 6, par: 3},
            {id: 9, number: 7, par: 4},
            {id: 10, number: 8, par: 3},
            {id: 11, number: 9, par: 5},
            {id: 12, number: 10, par: 4},
            {id: 13, number: 11, par: 3},
            {id: 14, number: 12, par: 5},
            {id: 15, number: 13, par: 4},
            {id: 16, number: 14, par: 4},
            {id: 17, number: 15, par: 3},
            {id: 18, number: 16, par: 3},
            {id: 19, number: 17, par: 5},
            {id: 20, number: 18, par: 5},
        ]},
        hole: {id: 12, number: 10, par: 4}, // current hole
    },
    allCourses: [{id: 1, name: 'Whispering Pines', holes: [
        {id: 3, number: 1, par: 3},
        {id: 4, number: 2, par: 4},
        {id: 5, number: 3, par: 5},
        {id: 6, number: 4, par: 4},
        {id: 7, number: 5, par: 5},
        {id: 8, number: 6, par: 3},
        {id: 9, number: 7, par: 4},
        {id: 10, number: 8, par: 3},
        {id: 11, number: 9, par: 5},
        {id: 12, number: 10, par: 4},
        {id: 13, number: 11, par: 3},
        {id: 14, number: 12, par: 5},
        {id: 15, number: 13, par: 4},
        {id: 16, number: 14, par: 4},
        {id: 17, number: 15, par: 3},
        {id: 18, number: 16, par: 3},
        {id: 19, number: 17, par: 5},
        {id: 20, number: 18, par: 5},
    ]}],  // all the courses
    isLoading: false,
}

// action types
// Create
const ADD_GOLFER = {
    type: 'ADD_GOLFER'
}
const ADD_COURSE = {
    type: 'ADD_COURSE'
}
const ADD_GROUP = {
    type: 'ADD_GROUP'
}
// Retrieve
// after log in
const REQUEST_GOLF_STATE = {
    type: 'REQUEST_GOLF_STATE'
}
// while searching
const REQUEST_GOLFERS = {
    type: 'REQUEST_GOLFERS'
}
// while searching
const REQUEST_COURSES = {
    type: 'REQUEST_COURSES'
}
// Update
// logged in
const RECEIVE_GOLF_STATE = {
    type: 'RECEIVE_GOLF_STATE'
}
// searching
const RECEIVE_GOLFERS = {
    type: 'RECEIVE_GOLFERS'
}
// searching
const RECEIVE_COURSES = {
    type: 'RECEIVE_COURSES'
}
// editing course
const UPDATE_COURSE = {
    type: 'UPDATE_COURSE'
}
// editing golfer
const UPDATE_GOLFER = {
    type: 'UPDATE_GOLFER'
}
// playing round
const UPDATE_HOLE_SCORE = {
    type: 'UPDATE_HOLE_SCORE'
}
// Delete
const DELETE_COURSE = {
    type: 'DELETE_COURSE'
}
const DELETE_GOLFER = {
    type: 'DELETE_GOLFER'
}
const DELETE_COURSE_SCORE = {
    type: 'DELETE_COURSE_SCORE'
}
const DELETE_GROUP = {
    type: 'DELETE_GROUP'
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
export const addGolfer = ({name}) => {
    return {
        ...ADD_GOLFER,
        newGolfer: {
            id: uuid(),
            name
        }
    }
}
export const addCourseScore = ({golfer_id, course_id}) => {
    return {
        ...ADD_COURSE_SCORE,
        newCourseScore: {
            id: uuid(),
            golfer_id,
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
export const addCurrentCourse = ({id, name}) => {
    return {
        ...ADD_CURRENT_COURSE,
        newCurrentCourse: {
            id,
            name
        }
    }
}
export const addCurrentHole = ({id, course_id, number, par}) => {
    return {
        ...ADD_CURRENT_HOLE,
        newCurrentHole: {
            id,
            course_id,
            number,
            par
        }
    }
}
export const addCurrentGolfer = ({id, name}) => {
    return {
        ...ADD_CURRENT_GOLFER,
        newCurrentGolfer: {
            id,
            name
        }
    }
}
export const addCurrentCourseScore = ({id, golfer_id, course_id}) => {
    return {
        ...ADD_CURRENT_COURSE_SCORE,
        newCurrentCourseScore: {
            id,
            golfer_id,
            course_id
        }
    }
}
export const addCurrentHoleScore = ({id, course_score_id, hole_id, shots}) => {
    return {
        ...ADD_CURRENT_HOLE_SCORE,
        newCurrentHoleScore: {
            id,
            course_score_id, 
            hole_id,
            shots
        }
    }
}
// Retrieve
export const requestGolfState = () => {
    fetch('http://localhost:3002/')
    .then(res => res.json())
    .then(receiveGolfState)
    return {
        ...REQUEST_GOLF_STATE,
        isLoading: true
    }
}
const receiveGolfState = (golfState) => {
    return {
        ...RECEIVE_GOLF_STATE,
        golfState,
        isLoading: false
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
export const updateGolfer = ({id, name}) => {
    return {
        ...UPDATE_GOLFER,
        updatedGolfer: {
            id,
            name
        }
    }
}
export const updateCourseScore = ({id, course_id, golfer_id}) => {
    return {
        ...UPDATE_COURSE_SCORE,
        updatedCourseScore: {
            id,
            course_id,
            golfer_id
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
export const updateCurrentCourse = ({id, name}) => {
    return {
        ...UPDATE_CURRENT_COURSE,
        updatedCurrentCourse: {
            id,
            name
        }
    }
}
export const updateCurrentHole = ({id, course_id, number, par}) => {
    return {
        ...UPDATE_CURRENT_HOLE,
        updatedCurrentHole: {
            id,
            course_id,
            number,
            par
        }
    }
}
export const updateCurrentGolfer = ({id, name}) => {
    return {
        ...UPDATE_CURRENT_GOLFER,
        updatedCurrentGolfer: {
            id,
            name
        }
    }
}
export const updateCurrentCourseScore = ({id, golfer_id, course_id}) => {
    return {
        ...UPDATE_CURRENT_COURSE_SCORE,
        updatedCurrentCourseScore: {
            id,
            golfer_id,
            course_id
        }
    }
}
export const updateCurrentHoleScore = ({id, course_score_id, hole_id, shots}) => {
    return {
        ...UPDATE_CURRENT_HOLE_SCORE,
        updatedCurrentHoleScore: {
            id,
            course_score_id, 
            hole_id,
            shots
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
export const deleteGolfer = ({id, name}) => {
    return {
        ...DELETE_GOLFER,
        golferToDelete: {
            id,
            name
        }
    }
}
export const deleteCourseScore = ({id, course_id, golfer_id}) => {
    return {
        ...DELETE_COURSE_SCORE,
        courseScoreToDelete: {
            id,
            course_id,
            golfer_id
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
export const deleteCurrentCourse = ({id, name}) => {
    return {
        ...DELETE_CURRENT_COURSE,
        deletedCurrentCourse: {
            id,
            name
        }
    }
}
export const deleteCurrentHole = ({id, course_id, number, par}) => {
    return {
        ...DELETE_CURRENT_HOLE,
        deletedCurrentHole: {
            id,
            course_id,
            number,
            par
        }
    }
}
export const deleteCurrentGolfer = ({id, name}) => {
    return {
        ...DELETE_CURRENT_GOLFER,
        deletedCurrentGolfer: {
            id,
            name
        }
    }
}
export const deleteCurrentCourseScore = ({id, golfer_id, course_id}) => {
    return {
        ...DELETE_CURRENT_COURSE_SCORE,
        deletedCurrentCourseScore: {
            id,
            golfer_id,
            course_id
        }
    }
}
export const deleteCurrentHoleScore = ({id, course_score_id, hole_id, shots}) => {
    return {
        ...DELETE_CURRENT_HOLE_SCORE,
        deletedCurrentHoleScore: {
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
        case ADD_GOLFER.type:
        return {
            ...state,
            golfers: [
                ...state.golfers,
                action.newGolfer
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
        case ADD_CURRENT_COURSE.type:
        return {
            ...state,
            currentCourse: action.newCurrentCourse
        }
        case ADD_CURRENT_HOLE.type:
        return {
            ...state,
            currentHole: action.newCurrentHole
        }
        case ADD_CURRENT_GOLFER.type:
        return {
            ...state,
            currentGolfers: [
                ...state.currentGolfers,
                action.newCurrentGolfer
            ]
        }
        case ADD_CURRENT_COURSE_SCORE.type:
        return {
            ...state,
            currentCourseScores: [
                ...state.currentCourseScores,
                action.newCurrentCourseScore
            ]
        }
        case ADD_CURRENT_HOLE_SCORE.type:
        return {
            ...state,
            currentHoleScores: [
                ...state.currentHoleScores,
                action.newCurrentHoleScore
            ]
        }
        // Retrieve
        case REQUEST_GOLF_STATE.type:
        return {
            ...state,
            golfState: action.golfState
        }
        // Update
        case RECEIVE_GOLF_STATE.type:
        return {
            ...state,
            golfState: action.golfState
        }
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
        case UPDATE_GOLFER.type:
        return {
            ...state,
            golfers: state.golfers.map(golfer => {
                if (golfer.id === action.updatedGolfer.id) {
                    return action.updatedGolfer
                } else {
                    return golfer
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
        case UPDATE_CURRENT_COURSE.type:
        return {
            ...state,
            currentCourse: action.updatedCurrentCourse
        }
        case UPDATE_CURRENT_HOLE.type:
        return {
            ...state,
            currentHole: action.updatedCurrentHole
        }
        case UPDATE_CURRENT_GOLFER.type:
        return {
            ...state,
            currentGolfers: state.currentGolfers.map(golfer => {
                if (golfer.id === action.updatedCurrentGolfer.id) {
                    return action.updatedCurrentGolfer
                } else {
                    return golfer
                }
            })
        }
        case UPDATE_CURRENT_COURSE_SCORE.type:
        return {
            ...state,
            currentCourseScores: state.currentCourseScores.map(score => {
                if (score.id === action.updatedCurrentCourseScore.id) {
                    return action.updatedCurrentCourseScore
                } else {
                    return score
                }
            })
        }
        case UPDATE_CURRENT_HOLE_SCORE.type:
        return {
            ...state,
            currentHoleScores: state.currentHoleScores.map(score => {
                if (score.id === action.updatedCurrentHoleScore.id) {
                    return action.updatedCurrentHoleScore
                } else {
                    return score
                }
            }).sort((score1, score2) => score2.number - score1.number)
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
        case DELETE_GOLFER.type:
        return {
            ...state,
            golfers: state.golfers.filter(golfer => golfer.id !== action.golferToDelete.id)
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
        case DELETE_CURRENT_COURSE.type:
        return {
            ...state,
            currentCourse: {}
        }
        case DELETE_CURRENT_HOLE.type:
        return {
            ...state,
            currentHole: {}
        }
        case DELETE_CURRENT_GOLFER.type:
        return {
            ...state,
            currentGolfers: state.currentGolfers.filter(golfer => golfer.id !== action.deleteCurrentGolfer.id)
        }
        case DELETE_CURRENT_COURSE_SCORE.type:
        return {
            ...state,
            currentCourseScores: state.currentCourseScores.filter(score => score.id !== action.deletedCurrentCourseScore.id)
        }
        case DELETE_CURRENT_HOLE_SCORE.type:
        return {
            ...state,
            currentHoleScores: state.currentHoleScores.filter(score => score.id !== action.deletedCurrentHoleScore.id)
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