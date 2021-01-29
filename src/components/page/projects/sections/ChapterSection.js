import React, {Component} from 'react';
import ChapterList from '../list/chapters/ChapterList'
import {Button, Col, Form, Row} from 'react-bootstrap';
import './style.scss'

const newChapterInitialValue = {
    name: "",
    description: ""
}

class ChapterSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chapters: [
                {
                    id: 1,
                    name: "Chapitre #1",
                    description: "Chapitre un",
                    steps: [
                        {
                            id: 1,
                            name: "Etape #1",
                            description: "Première étape",
                            tasks: [
                                {
                                    id: 1,
                                    name: "Tâche #1",
                                    description: "Première tâche",
                                    isDone: true
                                },
                                {
                                    id: 2,
                                    name: "Tâche #2",
                                    description: "Seconde tâche",
                                    isDone: false
                                },
                            ]
                        },
                        {
                            id: 2,
                            name: "Etape #2",
                            description: "Deuxième étape"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Chapitre #2",
                    description: "Chapitre deux",
                }
            ],
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
            newChapterShown: false,
            newChapter: newChapterInitialValue
        })
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
            <Form>
                <Form.Group controlId="form-create-project-name">
                    <Form.Label>Nom du chapitre</Form.Label>
                    <Form.Control onChange={this.handleInputChange} type="text"
                                  placeholder={"Chapitre #" + (this.state.chapters.length + 1)} name="name"
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
        const {chapters, newChapterShown} = this.state;

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

export default ChapterSection;