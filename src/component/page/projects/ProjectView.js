import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Container,
    Row,
    Col,
    Button,
    Tabs,
    Tab
} from 'react-bootstrap';
import Avatar from '../../common/avatar';
import ProjectUpdateModal from './ProjectUpdateModal';
import ProjectDeletionModal from './ProjectDeletionModal';
import ProjectsContainer from '../../../container/ProjectsContainer';
import LoadingIndicator from '../../common/loadingIndicator';
import { getFullProject } from '../../../api/ProjectsApi';

class ProjectView extends Component {

    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            lastActive: null,
            activeTab:"chapters",
            project: null
        }
    }

    handleTabChange=(tab) => {
        this.setState({
            activeTab: tab
        })
    }

    getActiveTab=() => {
        switch (this.state.activeTab) {
            case "chapters":
                return <p>Chapitres</p>

            case "members":
                return <p>Membres</p>

            case "links":
                return <p>Liens Utiles</p>
        
            default:
                return <p>Onglet inconnu</p>;
        }
    }

    fetchProject = () => {
        const active = this.props.projects.active;
        if(!active){
            this.setState({
                isLoading: false
            });
            return;
        }

        this.setState({
            isLoading: true,
            lastActive: active
        });

        getFullProject(active.id)
         .then((response) => {
            this.setState({
                project: response,
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

    componentDidMount(){
        if(this.props.projects?.active ?? false){
            this.fetchProject();
        }else{
            this.setState({
                isLoading: false
            });
        }
    }

    componentDidUpdate(){
        if(!this.state.isLoading && this.props.projects?.active != this.state.lastActive){
            this.fetchProject();
        }
    }
    
    render(){
        const {isLoading, project} = this.state;

        if(isLoading) {
            return <LoadingIndicator />
        }

        if(!project){
            return (
                <p className="text-centered">Aucun projet selectionné</p>
            )
        }

        return (
            <Container className="project-view" fluid>
                <Row className="project-infos">
                    <Col md="auto">
                        <Avatar imageUrl={project.imageUrl} name={project.name} size="lg"/>
                    </Col>
                    <Col>
                        <h1 className="text-primary title">{project.name}</h1>
                        <p>{project.description}</p>
                    </Col>
                    <Col md="auto" className="actions">
                        <ProjectUpdateModal project={project} onProjectUpdated={this.fetchProject}>
                            <Button variant="primary">
                                <FontAwesomeIcon icon={["far","edit"]}/>
                            </Button>
                        </ProjectUpdateModal>
                        <ProjectDeletionModal project={project} onProjectDeleted={() => window.location.reload(false)}>
                            <Button variant="primary">
                                <FontAwesomeIcon icon={["far","trash-alt"]}/>
                            </Button>
                        </ProjectDeletionModal>
                    </Col>
                </Row>
                <Row className="project-sections">
                    <Tabs activeKey={this.state.activeTab} className="project-tabs" onSelect={this.handleTabChange}>
                        <Tab eventKey="chapters" title="Chapitres"/>
                        <Tab eventKey="members" title="Membres"/>
                        <Tab eventKey="links" title="Liens Utiles"/>
                    </Tabs>
                    <div className="content">
                        {this.getActiveTab()}
                    </div>
                </Row>
            </Container>
        )
    }
}

export default ProjectsContainer(ProjectView);