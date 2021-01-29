import {request} from './Api'
import {API_BASE_URL} from '../constants';

export function getProjects() {
    return request({
        url: API_BASE_URL + "/projects",
        method: "GET"
    })
}

export function getProject(projectId) {
    return request({
        url: API_BASE_URL + "/projects/" + projectId,
        method: "GET"
    })
}

export function getFullProject(projectId) {
    return request({
        url: API_BASE_URL + "/projects/" + projectId + "/full",
        method: "GET"
    })
}

export function createProject(project) {
    return request({
        url: API_BASE_URL + "/projects",
        method: 'POST',
        body: JSON.stringify(project)
    })
}

export function updateProject(project) {
    return request({
        url: API_BASE_URL + "/projects/" + project.id,
        method: 'PUT',
        body: JSON.stringify(project)
    })
}


export function deleteProject(project) {
    return request({
        url: API_BASE_URL + "/projects/" + project.id,
        method: 'DELETE'
    })
}