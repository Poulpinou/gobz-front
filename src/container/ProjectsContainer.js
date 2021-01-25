import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProjectActions from '../action/ProjectsAction';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ProjectActions, dispatch)
})

const mapStateToProps = (state) => ({
    projects: state.projects
})

const ProjectsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default ProjectsContainer;