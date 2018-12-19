import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from './store'
import GolfRound from './GolfRound'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Create
        addCourse: (course) => {
            dispatch(actions.addCourse(course))
        },
        addHole: (hole) => {
            dispatch(actions.addHole(hole))
        },
        addPlayer: (player) => {
            dispatch(actions.addPlayer(player))
        },
        addCourseScore: (courseScore) => {
            dispatch(actions.addCourseScore(courseScore))
        },
        addHoleScore: (holeScore) => {
            dispatch(actions.addHoleScore(holeScore))
        },
        addCurrentCourse: (currentCourse) => {
            dispatch(actions.addCurrentCourse(currentCourse))
        },
        addCurrentPlayer: (currentPlayer) => {
            dispatch(actions.addCurrentPlayer(currentPlayer))
        },
        addCurrentHole: (currentHole) => {
            dispatch(actions.addCurrentHole(currentHole))
        },
        addCurrentCourseScore: (currentCourseScore) => {
            dispatch(actions.addCurrentCourseScore(currentCourseScore))
        },
        addCurrentHoleScore: (currentHoleScore) => {
            dispatch(actions.addCurrentHoleScore(currentHoleScore))
        },
        // Retreive
        // Update
        updateCourse: (course) => {
            dispatch(actions.updateCourse(course))
        },
        updateHole: (hole) => {
            dispatch(actions.updateHole(hole))
        },
        updatePlayer: (player) => {
            dispatch(actions.updatePlayer(player))
        },
        updateCourseScore: (courseScore) => {
            dispatch(actions.updateCourseScore(courseScore))
        },
        updateHoleScore: (holeScore) => {
            dispatch(actions.updateHoleScore(holeScore))
        },
        updateCurrentCourse: (currentCourse) => {
            dispatch(actions.updateCurrentCourse(currentCourse))
        },
        updateCurrentPlayer: (currentPlayer) => {
            dispatch(actions.updateCurrentPlayer(currentPlayer))
        },
        updateCurrentHole: (currentHole) => {
            dispatch(actions.updateCurrentHole(currentHole))
        },
        updateCurrentCourseScore: (currentCourseScore) => {
            dispatch(actions.updateCurrentCourseScore(currentCourseScore))
        },
        updateCurrentHoleScore: (currentHoleScore) => {
            dispatch(actions.updateCurrentHoleScore(currentHoleScore))
        },
        // Delete
        deleteCourse: (course) => {
            dispatch(actions.deleteCourse(course))
        },
        deleteHole: (hole) => {
            dispatch(actions.deleteHole(hole))
        },
        deletePlayer: (player) => {
            dispatch(actions.deletePlayer(player))
        },
        deleteCourseScore: (courseScore) => {
            dispatch(actions.deleteCourseScore(courseScore))
        },
        deleteHoleScore: (holeScore) => {
            dispatch(actions.deleteHoleScore(holeScore))
        },
        deleteCurrentCourse: (currentCourse) => {
            dispatch(actions.deleteCurrentCourse(currentCourse))
        },
        deleteCurrentPlayer: (currentPlayer) => {
            dispatch(actions.deleteCurrentPlayer(currentPlayer))
        },
        deleteCurrentHole: (currentHole) => {
            dispatch(actions.deleteCurrentHole(currentHole))
        },
        deleteCurrentCourseScore: (currentCourseScore) => {
            dispatch(actions.deleteCurrentCourseScore(currentCourseScore))
        },
        deleteCurrentHoleScore: (currentHoleScore) => {
            dispatch(actions.deleteCurrentHoleScore(currentHoleScore))
        },
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default withRouter(connector(GolfRound))