import { createStore } from 'redux'

// set up default state
const defaultState = {
    isLoading: false,
    searchTerm: '',
    searchResults: [], // golfer or courses that match searchterm
    edit: {}, // object to edit, course/golfer
    golfState: {
        golfer: {}, // logged in golfer
        golfers: [], // all other golfers
        courses: [],  // all the courses
        group: {},
    }
}

// action types
// Create
// async
const ADD_GOLFER = {
    type: 'ADD_GOLFER'
}
// async
const ADD_COURSE = {
    type: 'ADD_COURSE'
}
// async
const ADD_GROUP = {
    type: 'ADD_GROUP'
}
// Retrieve
// after log in
const REQUEST_GOLF_STATE = {
    type: 'REQUEST_GOLF_STATE'
}
// Update
// logged in
const RECEIVE_GOLF_STATE = {
    type: 'RECEIVE_GOLF_STATE'
}
const LOGIN_GOLFER = {
    type: 'LOGIN_GOLFER'
}
const LOGOUT_GOLFER = {
    type: 'LOGOUT_GOLFER'
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
const UPDATE_CURRENT_HOLE = {
    type: 'UPDATE_CURRENT_HOLE'
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
export const addCourse = (course) => {
    fetch('/course', {
        method: 'post',
        body: JSON.stringify(course),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(golfState => store.dispatch(receiveGolfState(golfState)))
    return {
        ...ADD_COURSE,
        isLoading: true
    }
}
export const addGolfer = (name) => {
    fetch('/register', {
        method: 'post',
        body: JSON.stringify({name}),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(golfState => store.dispatch(receiveGolfState(golfState)))
    return {
        ...ADD_GOLFER,
        isLoading: true
    }
}
export const addGroup = (group) => {
    fetch('/teetime', {
        method: 'post',
        body: JSON.stringify(group),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(golfState => store.dispatch(receiveGolfState(golfState)))
    return {
        ...ADD_GROUP,
        isLoading: true
    }
}
// Retrieve
export const requestGolfState = () => {
    fetch('/')
    .then(res => res.json())
    .then(golfState => store.dispatch(receiveGolfState(golfState)))
    return {
        ...REQUEST_GOLF_STATE,
        isLoading: true
    }
}
const receiveGolfState = (golfState) => {
    console.log('receiving golf state')
    return {
        ...RECEIVE_GOLF_STATE,
        golfState,
        isLoading: false
    }
}
// Update
export const loginGolfer = (loginInfo) => {
    fetch('/login', {
        method: 'post',
        body: JSON.stringify(loginInfo),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(golfState => store.dispatch(receiveGolfState(golfState)))
    return {
        ...LOGIN_GOLFER,
        isLoading: true
    }
}
export const logoutGolfer = () => {
    fetch('/logout')
    .then(res => res.json())
    .then(golfState => store.dispatch(receiveGolfState(golfState)))
    return {
        ...LOGOUT_GOLFER,
        isLoading: true
    }
}
export const updateCourse = (course) => {
    fetch('/updateCourse', {
        method: 'post',
        body: JSON.stringify(course),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json)
    .then(golfState => store.dispatch(receiveGolfState(golfState)))
    return {
        ...UPDATE_COURSE,
        isLoading: true
    }
}
export const updateGolfer = (golfer) => {
    fetch('/updateGolfer', {
        method: 'post',
        body: JSON.stringify(golfer),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json)
    .then(golfState => store.dispatch(receiveGolfState(golfState)))
    return {
        ...UPDATE_GOLFER,
        isLoading: true
    }
}
export const updateCurrentHole = (hole) => {
    return {
        ...UPDATE_CURRENT_HOLE,
        hole
    }
}
export const updateHoleScore = (holeScore) => {
    fetch('/stroke', {
        method: 'post',
        body: JSON.stringify(holeScore),
        headers: {'ContentType': 'application/json'}
    })
    .then(res => res.json())
    .then(golfState => store.dispatch(receiveGolfState(golfState)))
    return {
        ...UPDATE_HOLE_SCORE,
        isLoading: true
    }
}
export const updateSearchTerm = (searchTerm) => {
    return {
        ...UPDATE_SEARCH_TERM,
        searchTerm
    }
}
// Delete
export const deleteCourse = (course) => {
    return {
        ...DELETE_COURSE,
        course
    }
}
export const deleteGolfer = (golfer) => {
    return {
        ...DELETE_GOLFER,
        golfer
    }
}
export const deleteGroup = (group) => {
    return {
        ...DELETE_GROUP,
        group
    }
}
export const deleteCourseScore = (courseScore) => {
    return {
        ...DELETE_COURSE_SCORE,
        courseScore
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
            isLoading: action.isLoading
        }
        case ADD_GOLFER.type:
        return {
            ...state,
            golfState: {
                ...state.golfState,
                golfers: [
                ...state.golfState.golfers,
                action.newGolfer
                ]
            }
        }
        case ADD_GROUP.type:
        return {
            ...state,
            isLoading: action.isLoading
        }
        // Retrieve
        case REQUEST_GOLF_STATE.type:
        return {
            ...state,
            isLoading: action.isLoading
        }
        // Update
        case RECEIVE_GOLF_STATE.type:
        return {
            ...state,
            golfState: action.golfState,
            isLoading: action.isLoading
        }
        case LOGIN_GOLFER.type:
        return {
            ...state,
            isLoading: action.isLoading
        }
        case LOGOUT_GOLFER.type:
        return {
            ...state,
            isLoading: action.isLoading
        }
        case UPDATE_COURSE.type:
        return {
            ...state,
            isLoading: action.isLoading
        }
        case UPDATE_GOLFER.type:
        return {
            ...state,
            isLoading: action.isLoading
        }
        case UPDATE_HOLE_SCORE.type:
        return {
            ...state,
            isLoading: action.isLoading
        }
        case UPDATE_CURRENT_HOLE.type:
        return {
            ...state,
            group: {
                ...state.group,
                hole: action.hole
            }
        }
        case UPDATE_SEARCH_TERM.type:
        return {
            ...state,
            searchTerm: action.searchTerm
        }
        // Delete
        case DELETE_COURSE.type:
        return {
            ...state,
            courses: state.courses.filter(course => course.id !== action.courseToDelete.id)
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
        default:
        return state
    }
}

const store = createStore(
    scorecard,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store