import React, {Component} from 'react';
import {FormCheck} from 'react-bootstrap';
import './style.scss';

class TaskItem extends Component {
    render() {
        const {task} = this.props;

        return (
            <FormCheck
                className="task-item"
                key={task.id}
                type="checkbox"
                label={task.name}
                name="task-task.id"
                checked={task.isDone}
                disabled
            />
        )
    }
}

export default TaskItem;