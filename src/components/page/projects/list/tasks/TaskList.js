import React, {Component} from 'react';
import TaskItem from './TaskItem'
import './style.scss';

class TaskList extends Component {
    render() {
        const {tasks} = this.props;

        return (
            <div className="task-list">
                {(tasks?.length ?? 0) <= 0
                    ? <p className="text-centered">Aucune tâche</p>
                    : tasks.map(
                        (task) => <TaskItem key={task.id} task={task}/>
                    )
                }
            </div>
        )
    }
}

export default TaskList;