import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from './store'
import Golf from './Golf';

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Create
        addCourse: (course) => {
            dispatch(actions.addCourse(course))
        },
        addGolfer: (golfer) => {
            dispatch(actions.addGolfer(golfer))
        },
        addGroup: (group) => {
            dispatch(actions.addGroup(group))
        },
        // Retreive
        requestGolfState: () => {
            dispatch(actions.requestGolfState())
        },
        // Update
        loginGolfer: (loginInfo) => {
            dispatch(actions.loginGolfer(loginInfo))
        },
        logoutGolfer: () => {
            dispatch(actions.logoutGolfer())
        },
        updateCourse: (course) => {
            dispatch(actions.updateCourse(course))
        },
        updateGolfer: (golfer) => {
            dispatch(actions.updateGolfer(golfer))
        },        
        updateCurrentHole: (hole) => {
            dispatch(actions.updateCurrentHole(hole))
        },
        updateHoleScore: (holeScore) => {
            dispatch(actions.updateHoleScore(holeScore))
        },
        updateSearchTerm: (searchTerm) => {
            dispatch(actions.updateSearchTerm(searchTerm))
        },
        // Delete
        deleteCourse: (course) => {
            dispatch(actions.deleteCourse(course))
        },
        deleteGolfer: (golfer) => {
            dispatch(actions.deleteGolfer(golfer))
        },
        deleteCourseScore: (courseScore) => {
            dispatch(actions.deleteCourseScore(courseScore))
        },
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default withRouter(connector(Golf))