import React, { Component } from 'react';
import {
    Col,
    Row
 }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StepList from '../step/StepList';
import './style.scss';

class ChapterItem extends Component {

    constructor(props){
        super(props);

        this.state={
            shown: false
        }
    }

    handleSwitch = () => {
        this.setState({
            shown: !this.state.shown
        })
    }

    render(){
        const {chapter} = this.props;

        return (
            <div className="chapter-item" shown={this.state.shown? "true" : "false"} onClick={this.handleSwitch}>
                <Row className="chapter-item-head">
                    <Col md="auto">
                        {this.state.shown
                            ? <FontAwesomeIcon className="chapter-item-chevron" icon={["fas","chevron-down"]}/>
                            : <FontAwesomeIcon className="chapter-item-chevron" icon={["fas","chevron-right"]}/>
                        }
                    </Col>
                    <Col md={3}>
                        <h4 className="chapter-item-title">{chapter.name}</h4>
                    </Col>
                    <Col md={5}>
                        <p className="chapter-item-description">{chapter.description}</p>
                    </Col>
                    <Col md="auto">
                    
                    </Col>
                </Row>
                <div className="chapter-item-body">
                    <StepList steps={chapter.steps}/>
                </div>
                <Row className="chapter-item-foot">
                </Row>
            </div>
        )
    }
}

export default ChapterItem;