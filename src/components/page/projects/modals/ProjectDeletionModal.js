import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {deleteProject} from '../../../../api/ProjectsApi';
import Alert from "react-s-alert";
import ProjectsActiveContainer from "../../../../containers/ProjectsActiveContainer";


class ProjectDeletionModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    handleShow = () => this.setState({
        show: true
    })

    handleClose = () => this.setState({
        show: false
    })

    handleValidate = (event) => {
        event.preventDefault();

        const {project, actions} = this.props;

        deleteProject(project)
            .then(response => {
                Alert.success(project.name + " a été supprimé avec succès");
                actions.removeProject(project);
            }).catch(error => {
            console.error(error)
            Alert.error("Une erreur s'est produite, veuillez réessayer");
        })

        this.handleClose();
    }

    render() {
        return (
            <>
                {this.props.children
                    ? React.cloneElement(this.props.children, {onClick: this.handleShow})
                    : <Button onClick={this.handleShow}> Supprimer le Projet </Button>
                }
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Supprimer {this.props.project?.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Voulez vous vraiment supprimer {this.props.project?.name}? Cette action ne peut pas être
                        annulée!
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Annuler
                        </Button>
                        <Button variant="danger" onClick={this.handleValidate}>
                            Supprimer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ProjectsActiveContainer(ProjectDeletionModal);