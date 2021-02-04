import {TASKS} from "../../constants/actions/ProjectsActionTypes";

export const addTask = (step, task) => ({
    type: TASKS.ADD,
    task
})

export const removeTask = (taskId) => ({
    type: TASKS.REMOVE,
    taskId
})

export const updateTask = (task) => ({
    type: TASKS.UPDATE,
    task
})