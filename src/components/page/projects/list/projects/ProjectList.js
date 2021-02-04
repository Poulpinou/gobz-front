import React, {Component} from 'react';
import './style.scss';
import ProjectItem from './ProjectItem';
import ProjectsContainer from "../../../../../containers/ProjectsContainer";
import {Button, Form, FormControl} from "react-bootstrap";
import ProjectCreationModal from "../../modals/ProjectCreationModal";

class ProjectList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filters: {
                text: ""
            }
        }
    }

    handleTextFilterInputChange = (event) => {
        this.setState({
            filters: {
                ...this.state.filters,
                text: event.target.value
            }
        })
    }

    projectShouldBeDisplayed = (project) => {
        const {filters} = this.state;

        if(filters.text !== ""){
            if(!project.name.includes(filters.text)){
                return false;
            }
        }

        return true;
    }

    renderProjectListHeader() {
        return (
            <div className="project-list-header">
                <div className="filter-menu">
                    <Form inline>
                        <FormControl type="text" placeholder="Filter" value={this.state.filters.text} onChange={this.handleTextFilterInputChange}/>
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
                        : projects.list
                            .filter(this.projectShouldBeDisplayed)
                            .map(project => (
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