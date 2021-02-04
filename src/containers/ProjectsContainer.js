import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {List} from '../actions/projects';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(List, dispatch)
})

const mapStateToProps = (state) => ({
    projects: state.projects
})

const ProjectsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default ProjectsContainer;