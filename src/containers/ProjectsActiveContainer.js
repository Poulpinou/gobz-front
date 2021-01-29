import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProjectActions from '../actions/ProjectsAction';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ProjectActions, dispatch)
})

const mapStateToProps = (state) => ({
    project: state.projects.active
})

const ProjectsActiveContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default ProjectsActiveContainer;