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
        }
        // Retreive
        // Update
        
        // Delete
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(ScoreCard)