import * as types from '../constant/type/action/ProjectActionTypes';

export const getProjects = () => ({
    type: types.GET_PROJECTS
})

export const getProject = (id)  => ({
    type: types.GET_PROJECT,
    id
})

export const createProject = (name) => ({
    type: types.CREATE_PROJECT,
    name
})

export const updateProject = (id, projectUpdates) => ({
    type: types.UPDATE_PROJECT,
    id,
    projectUpdates
})

export const deleteProject = (id) => ({
    type: types.DELETE_PROJECT,
    id
})