import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, Col, Container, Row, Tab, Tabs} from 'react-bootstrap';
import Avatar from '../../common/avatar';
import ProjectUpdateModal from './modals/ProjectUpdateModal';
import ProjectDeletionModal from './modals/ProjectDeletionModal';
import LoadingIndicator from '../../common/loadingIndicator';
import ChapterSection from './sections/ChapterSection';
import {getFullProject} from '../../../api/ProjectsApi';
import Alert from "react-s-alert";
import ProjectsActiveContainer from "../../../containers/ProjectsActiveContainer";

class ProjectView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            activeTab: "chapters"
        }
    }

    handleTabChange = (tab) => {
        this.setState({
            activeTab: tab
        })
    }

    getActiveTab = () => {
        switch (this.state.activeTab) {
            case "chapters":
                return <ChapterSection project={this.props.project}/>

            case "members":
                return <p>Membres</p>

            case "links":
                return <p>Liens Utiles</p>

            default:
                return <p>Onglet inconnu</p>;
        }
    }

    fetchProject = () => {
        const {project, actions} = this.props;

        this.setState({
            isLoading: true
        });

        getFullProject(project.id)
            .then((response) => {
                actions.fetchActiveProject(response)
                this.setState({
                    isLoading: false
                });
            })
            .catch(error => {
                console.error(error);
                Alert.error("Une erreur s'est produite lors de la récupération du projet, veuillez réessayer");
                this.setState({
                    isLoading: false
                });
            })
    }

    componentDidMount() {
        const {project} = this.props;
        if (!project) {
            this.setState({
                isLoading: false
            })
        } else {
            this.fetchProject()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {project} = this.props;
        const {isLoading} = this.state;

        if(!project || isLoading){
            return;
        }

        if (prevProps.project?.id !== project.id && !project.isFull) {
            this.fetchProject();
        }
    }

    renderSectionsTab(){
        return (
            <Row className="project-sections">
                <Tabs activeKey={this.state.activeTab} className="project-tabs" onSelect={this.handleTabChange}>
                    <Tab eventKey="chapters" title="Chapitres"/>
                    <Tab eventKey="members" title="Membres"/>
                    <Tab eventKey="links" title="Liens Utiles"/>
                </Tabs>
                <div className="section-content">
                    {this.getActiveTab()}
                </div>
            </Row>
        )
    }

    render() {
        const {isLoading} = this.state;
        const {project} = this.props;

        if (!project) {
            if (isLoading) {
                return <LoadingIndicator/>
            }

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
                        <ProjectUpdateModal project={project}>
                            <Button variant="primary">
                                <FontAwesomeIcon icon={["far", "edit"]}/>
                            </Button>
                        </ProjectUpdateModal>
                        <ProjectDeletionModal project={project}>
                            <Button variant="primary">
                                <FontAwesomeIcon icon={["far", "trash-alt"]}/>
                            </Button>
                        </ProjectDeletionModal>
                    </Col>
                </Row>
                {project.isFull
                    ? this.renderSectionsTab()
                    : (isLoading
                        ? <LoadingIndicator/>
                        : <p className="text-centered">Impossible de récupérer l'intégralité des données</p>
                    )
                }

            </Container>
        )
    }
}

export default ProjectsActiveContainer(ProjectView);