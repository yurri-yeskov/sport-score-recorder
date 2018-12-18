import { connect } from 'react-redux'
import * as actions from './store'
import ScoreCard from './ScoreCard'

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
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(ScoreCard)