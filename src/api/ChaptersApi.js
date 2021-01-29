import {request} from './Api'
import {API_BASE_URL} from '../constants';

export function getProjectChapters(projectId) {
    return request({
        url: API_BASE_URL + "/projects/" + projectId + "/chapters",
        method: 'GET'
    });
}

export function getChapter(chapter) {
    return request({
        url: API_BASE_URL + "/chapters/" + chapter.id,
        method: 'GET'
    });
}

export function createChapter(projectId, chapter) {
    return request({
        url: API_BASE_URL + "/projects/" + projectId + "/chapters",
        method: 'POST',
        body: JSON.stringify(chapter)
    });
}

export function updateChapter(chapter) {
    return request({
        url: API_BASE_URL + "/chapters/" + chapter.id,
        method: 'PUT',
        body: JSON.stringify(chapter)
    });
}

export function deleteChapter(chapter) {
    return request({
        url: API_BASE_URL + "/chapters/" + chapter.id,
        method: 'DELETE'
    });
}
