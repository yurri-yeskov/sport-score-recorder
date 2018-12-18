import { connect } from 'react-redux'
import * as actions from './store'
import ScoreCard from './ScoreCard'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (course) => {
            dispatch(actions.addCourse(course))
        },
        addHole: (hole) => {
            dispatch(actions.addHole(hole))
        },
        addPlayer: (player) => {
            dispatch(actions.addPlayer(player))
        },
        addCourse: (course) => {
            dispatch(actions.addCourse(course))
        },
        addCourseScore: (courseScore) => {
            dispatch(actions.addCourseScore(courseScore))
        },
        addHoleScore: (holeScore) => {
            dispatch(actions.addHoleScore(holeScore))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(ScoreCard)