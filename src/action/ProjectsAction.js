import * as types from '../constant/action/ProjectsActionTypes';

export const setActiveProject = (project) => ({
    type: types.SET_ACTIVE_PROJECT,
    active: project
})

export const setProjects = (projects) => ({
    type: types.SET_PROJECTS,
    projects: projects
})

export const setProjectsActiveFirst = (projects) => ({
    type: types.SET_PROJECTS_ACTIVE_FIRST,
    projects: projects
})