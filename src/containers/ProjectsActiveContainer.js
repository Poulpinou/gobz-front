import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Active} from "../actions/projects";

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Active, dispatch)
})

const mapStateToProps = (state) => ({
    project: state.projects.active
})

const ProjectsActiveContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default ProjectsActiveContainer;