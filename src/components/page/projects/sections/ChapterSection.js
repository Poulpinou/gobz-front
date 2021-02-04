import React, {Component} from 'react';
import ChapterList from '../list/chapters/ChapterList'
import {Button, Col, Form, Row} from 'react-bootstrap';
import {createChapter} from "../../../../api/ChaptersApi";
import './style.scss'
import Alert from "react-s-alert";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Chapters as ChaptersActions} from "../../../../actions/projects";

const newChapterInitialValue = {
    name: "",
    description: ""
}

class ChapterSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newChapter: newChapterInitialValue,
            newChapterShown: false
        }
    }

    handleNewChapterClick = () => {
        this.setState({
            newChapterShown: true,
            newChapter: newChapterInitialValue
        })
    }

    handleNewChapterClose = () => {
        this.setState({
            newChapterShown: false
        })
    }

    handleNewChapterValidate = (event) => {
        event.preventDefault();

        const {project, actions} = this.props;

        createChapter(project.id, this.state.newChapter)
            .then(response => {
                actions.addChapter(response);
                Alert.success(response.name + " créé avec succès!");
            })
            .catch(error => {
                console.error(error)
                Alert.error("Une erreur s'est produite, veuillez réessayer");
            })
            .finally(this.handleNewChapterClose)
    }

    handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            newChapter: {
                ...this.state.newChapter,
                [inputName]: inputValue
            }
        });
    }

    renderNewChapterForm() {
        const {newChapter} = this.state;

        return (
            <Form onSubmit={this.handleNewChapterValidate}>
                <Form.Group controlId="form-create-project-name">
                    <Form.Label>Nom du chapitre</Form.Label>
                    <Form.Control onChange={this.handleInputChange} type="text"
                                  placeholder={"Chapitre #" + ((this.state.chapters?.length ?? 0) + 1 )} name="name"
                                  value={newChapter.name}/>
                </Form.Group>

                <Form.Group controlId="form-create-project-description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleInputChange} as="textarea" rows={3} name="description"
                                  value={newChapter.description}/>
                </Form.Group>

                <div>
                    <Button variant="secondary" onClick={this.handleNewChapterClose}>
                        Annuler
                    </Button>
                    <Button type="submit" variant="primary">
                        Créer
                    </Button>
                </div>
            </Form>
        )
    }

    render() {
        const {newChapterShown} = this.state;
        const {chapters} = this.props;

        return (
            <div className="chapter-section">
                <div className="chapter-section-head">
                    <Row>
                        <Col>
                            <p className="text-light">
                                {chapters.length} chapitres dans ce projet
                            </p>
                        </Col>
                        <Col md="auto">
                            <Button variant="primary" onClick={this.handleNewChapterClick}>
                                Nouveau Chapitre
                            </Button>
                        </Col>
                    </Row>
                    <div className="new-chapter" shown={newChapterShown ? "true" : "false"}>
                        {this.renderNewChapterForm()}
                    </div>
                </div>

                <div className="chapter-section-body">
                    <ChapterList chapters={chapters}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ChaptersActions, dispatch)
})

const mapStateToProps = (state) => ({
    project: state.projects.active,
    chapters: state.projects.active.chapters
})

export default connect(mapStateToProps, mapDispatchToProps)(ChapterSection);