import React, {Component} from 'react';
import './style.scss';
import ProjectItem from './ProjectItem';
import ProjectsContainer from "../../../../../containers/ProjectsContainer";
import {Button, Form, FormControl} from "react-bootstrap";
import ProjectCreationModal from "../../modals/ProjectCreationModal";

class ProjectList extends Component {

    renderProjectListHeader() {
        return (
            <div className="project-list-header">
                <div className="filter-menu">
                    <Form inline>
                        <FormControl type="text" placeholder="Filter"/>
                    </Form>
                </div>

                <ProjectCreationModal>
                    <Button className="add-button"> + </Button>
                </ProjectCreationModal>
            </div>
        )
    }

    render() {
        const {projects, actions} = this.props;
        return (
            <div className="project-list">
                {this.renderProjectListHeader()}
                <div className="list">
                    {projects?.list?.length <= 0
                        ? <p className="text-centered">Aucun projet trouvé</p>
                        : projects.list.map(
                            (project) => (
                                <ProjectItem
                                    project={project}
                                    key={project.id}
                                    onClick={() => actions.setActiveProject(project)}
                                    isActive={project.id === this.props.projects.active?.id}
                                />
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ProjectsContainer(ProjectList)