import {request} from './Api'
import {API_BASE_URL} from '../constants';

export function getStep(step) {
    return request({
        url: API_BASE_URL + "/steps/" + step.id,
        method: 'GET'
    });
}

export function createStep(chapterId, step) {
    return request({
        url: API_BASE_URL + "/chapters/" + chapterId + "/steps",
        method: 'POST',
        body: JSON.stringify(step)
    });
}

export function updateStep(step) {
    return request({
        url: API_BASE_URL + "/steps/" + step.id,
        method: 'PUT',
        body: JSON.stringify(step)
    });
}

export function deleteStep(step) {
    return request({
        url: API_BASE_URL + "/steps/" + step.id,
        method: 'DELETE'
    });
}
