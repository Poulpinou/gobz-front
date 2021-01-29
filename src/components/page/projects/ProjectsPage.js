import React, {Component} from 'react';
import './style.scss';
import ProjectView from './ProjectView';
import ProjectsContainer from '../../../containers/ProjectsContainer';
import {getProjects} from '../../../api/ProjectsApi';
import ProjectList from "./list/projects/ProjectList";
import LoadingIndicator from "../../common/loadingIndicator";
import Alert from 'react-s-alert';

class ProjectsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    fetchProjects = () => {
        this.setState({
            isLoading: true
        });

        getProjects()
            .then(response => {
                this.props.actions.setProjectsActiveFirst(response);

                this.setState({
                    isLoading: false
                });
            })
            .catch(error => {
                console.error(error);
                Alert.error("Une erreur s'est produite, veuillez réessayer")

                this.setState({
                    isLoading: false
                });
            })
    }

    componentDidMount() {
        this.fetchProjects();
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingIndicator/>
        }

        return (
            <div className="projects-page">
                <div className="sidebar">
                    <ProjectList/>
                </div>
                <div className="content">
                    <ProjectView/>
                </div>
            </div>
        )
    }
}

export default ProjectsContainer(ProjectsPage);