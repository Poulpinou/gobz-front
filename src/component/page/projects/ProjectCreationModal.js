import React, { Component } from 'react';
import {
    Form,
    Modal,
    Button
 }  from 'react-bootstrap';
 import { createProject } from '../../../api/ProjectsApi';

const initialProjectValue = {
    name: '',
    description: '',
    shared: false
}

 class ProjectCreationModal extends Component {

    constructor(props){
        super(props);

        this.state = {
            show: false,
            project: initialProjectValue
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

        createProject(this.state.project)
            .then(response => {
                this.setState({
                    project: initialProjectValue
                })

                if(this.props.onProjectCreated){
                    this.props.onProjectCreated(response)
                }
            }).catch(error => {
                console.error(error)
            })

        this.handleClose();
    }

    handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.type === 'checkbox' ? target.checked : target.value;
        
        this.setState({
            project:{
                ...this.state.project,
                [inputName] : inputValue
            }
        }, () => {
            if(this.props.onChange){
                this.props.onChange(this.state.project)
            }
        });
    }

    renderprojectCreationForm(){
        const {project} = this.state;

        return (
            <div>
                <Form.Group controlId="form-create-project-name">
                    <Form.Label>Nom du projet</Form.Label>
                    <Form.Control onChange={this.handleInputChange} type="text" placeholder="Mon Projet" name="name" value={project.name}/>
                </Form.Group>

                <Form.Group controlId="form-create-project-description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleInputChange} as="textarea" rows={3} name="description" value={project.description} />
                </Form.Group>

                <Form.Group controlId="form-create-project-shared">
                    <Form.Check onChange={this.handleInputChange} type="checkbox" label="Projet public" name="shared" value={project.shared} />
                    <Form.Text className="text-muted">
                        Si coché, votre projet sera visible par tout le monde mais ne pourra être modifié que par vous et les contributeurs désignés du projet.
                    </Form.Text>
                </Form.Group>
            </div>
        )
    }

    render(){
        return (
            <>
                {this.props.children
                    ? React.cloneElement(this.props.children, { onClick: this.handleShow })
                    : <Button onClick={this.handleShow}> Nouveau Projet </Button>
                }
                <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose} 
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Form onSubmit={this.handleValidate}>
                        <Modal.Header closeButton>
                            <Modal.Title>Nouveau projet</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {this.renderprojectCreationForm()}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Fermer
                            </Button>
                            <Button type="submit" variant="primary">
                                Créer
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        )
    }
 }

 export default ProjectCreationModal;