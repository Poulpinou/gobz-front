import { request } from './Api'
import { API_BASE_URL } from '../constant';

export function getTask(task){
    return request({
        url: API_BASE_URL + "/tasks/" + task.id,
        method: 'GET'
    });
}

export function createTask(stepId, task){
    return request({
        url: API_BASE_URL + "/steps/" + stepId + "/tasks",
        method: 'POST',
        body: JSON.stringify(task)
    });
}

export function updateTask(task){
    return request({
        url: API_BASE_URL + "/tasks/" + task.id,
        method: 'PUT',
        body: JSON.stringify(task)
    });
}

export function deleteTask(task){
    return request({
        url: API_BASE_URL + "/tasks/" + task.id,
        method: 'DELETE'
    });
}