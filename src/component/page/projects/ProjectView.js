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
import Avatar from '../../common/Avatar';
import ProjectUpdateModal from './ProjectUpdateModal'

class ProjectView extends Component {

    constructor(props){
        super(props);

        this.state = {
            activeTab:"chapters"
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
    
    render(){
        const {project} = this.props;

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
                        <Button variant="primary">
                            <FontAwesomeIcon icon={["far","user"]}/>
                            {' '} Membres
                        </Button>
                        <ProjectUpdateModal project={project}>
                            <Button variant="primary">
                                <FontAwesomeIcon icon={["far","edit"]}/>
                            </Button>
                        </ProjectUpdateModal>
                        <Button variant="primary">
                            <FontAwesomeIcon icon={["far","trash-alt"]}/>
                        </Button>
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

export default ProjectView;