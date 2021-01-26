import React, { Component } from 'react';
import './style.scss';
import ProjectItem from './ProjectItem';
import ProjectView from './ProjectView';
import ProjectsContainer from '../../../container/ProjectsContainer';
import ProjectCreationModal from './ProjectCreationModal';
import {
    Form,
    FormControl,
    Button
 }  from 'react-bootstrap';
 import { getProjects } from '../../../api/ProjectsApi';
 import LoadingIndicator from '../../common/loadingIndicator';
 import Alert from 'react-s-alert';

class ProjectsPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            isLoading: true
        }
    }

    renderProjectListHeader(){
        return (
            <div className="header-container">
                <div className="filter-menu">
                    <Form inline>
                        <FormControl type="text" placeholder="Filter"/>
                    </Form>
                </div>

                <ProjectCreationModal onProjectCreated={this.handleProjectCreation}>
                    <Button className="add-button"> + </Button>
                </ProjectCreationModal>
            </div>
        )
    }

    renderProjectList(){
        if(this.props.projects?.list?.length <= 0){
            return <p className="text-centered">Aucun projet trouvé</p>
        }else{
            return this.props.projects.list.map(
                (project) => (
                    <ProjectItem 
                        project={project} 
                        key={project.id} 
                        onClick={() => this.props.actions.setActiveProject(project)}
                        isActive={project.id == this.props.projects.active?.id}
                    />
                )
            )
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
                
                this.setState({
                    isLoading: false
                });
            })
    }

    handleProjectCreation = (project) => {
        Alert.success(project.name + " a été créé avec succès");

        this.fetchProjects();
    }

    componentDidMount(){
        this.fetchProjects();
    }

    render(){
        
        return (
            <div className="projects-page">
                <div className="sidebar">
                    <div className="project-list-header">
                        {this.renderProjectListHeader()}
                    </div>

                    <div className="project-list">
                        {this.state.isLoading
                            ? <LoadingIndicator />
                            : this.renderProjectList()
                        }
                    </div>
                </div>
                <div className="content">
                    <ProjectView/>
                </div>
            </div>
        )
    }
}

export default ProjectsContainer(ProjectsPage);