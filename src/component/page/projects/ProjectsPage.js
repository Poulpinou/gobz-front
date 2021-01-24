import React, { Component } from 'react';
import './style.scss';
import ProjectItem from './ProjectItem';
import ProjectView from './ProjectView';
import ProjectsContainer from '../../../container/ProjectsContainer';

class ProjectsPage extends Component {

    renderProjects(){
        if(!this.props.projects?.list){
            return <p>Aucun projet trouvé</p>
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

    render(){
        return (
            <div className="projects-page">
                <div className="sidebar">
                    <div className="filter-container">
                        <p>Filters</p>
                    </div>

                    <div className="project-list">
                        {this.renderProjects()}
                    </div>
                </div>
                <div className="content">
                    <ProjectView
                        project={this.props.projects?.active}
                    />
                </div>
            </div>
        )
    }
}

export default ProjectsContainer(ProjectsPage);