import React, { Component } from 'react';
import TaskList from '../task/TaskList';
import './style.scss';

class StepItem extends Component {

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

    render() {
        const{step} = this.props;

        return(
            <div className="step-item">
                <div className="step-item-head">
                    <h5 className="step-item-title">
                        {step.name}
                    </h5>
                    <p className="step-item-description">
                        {step.description}
                    </p>
                </div>
                <div className="step-item-body">
                    <div className="task-list">
                        <TaskList tasks={step.tasks}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepItem;