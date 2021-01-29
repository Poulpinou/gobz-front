import * as types from '../constants/actions/ProjectsActionTypes';

export const setActiveProject = (project) => ({
    type: types.SET_ACTIVE_PROJECT,
    active: project
})

export const updateActiveProject = (project) => ({
    type: types.UPDATE_ACTIVE_PROJECT,
    project: project
})

export const fetchActiveProject = (project) => ({
    type: types.FETCH_ACTIVE_PROJECT,
    project:{
        ...project,
        isFull: true
    }
})

export const setProjects = (projects) => ({
    type: types.SET_PROJECTS,
    projects: projects
})

export const setProjectsActiveFirst = (projects) => ({
    type: types.SET_PROJECTS_ACTIVE_FIRST,
    projects: projects
})

export const addProject = (project) => ({
    type: types.ADD_PROJECT,
    project
})

export const removeProject = (project) => ({
    type: types.REMOVE_PROJECT,
    project
})

