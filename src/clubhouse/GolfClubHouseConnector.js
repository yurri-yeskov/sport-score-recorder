import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../store'
import GolfClubHouse from './GolfClubHouse';

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
        addGolfer: (golfer) => {
            dispatch(actions.addGolfer(golfer))
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
        addCurrentGolfer: (currentGolfer) => {
            dispatch(actions.addCurrentGolfer(currentGolfer))
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
        updateGolfer: (golfer) => {
            dispatch(actions.updateGolfer(golfer))
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
        updateCurrentGolfer: (currentGolfer) => {
            dispatch(actions.updateCurrentGolfer(currentGolfer))
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
        deleteGolfer: (golfer) => {
            dispatch(actions.deleteGolfer(golfer))
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
        deleteCurrentGolfer: (currentGolfer) => {
            dispatch(actions.deleteCurrentGolfer(currentGolfer))
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

export default withRouter(connector(GolfClubHouse))