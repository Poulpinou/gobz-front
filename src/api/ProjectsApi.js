import { request } from './Api'
import { API_BASE_URL } from '../constant';


export function getProjects(){
    return request({
        url: API_BASE_URL + "/projects",
        method: "GET"
    })
}

export function createProject(project){
    return request({
        url: API_BASE_URL + "/projects",
        method: 'POST',
        body: JSON.stringify(project)
    })
}