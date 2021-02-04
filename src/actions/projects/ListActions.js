import {LIST} from "../../constants/actions/ProjectsActionTypes";

export const setProjects = (projects) => ({
    type: LIST.SET,
    projects: projects
})

export const setProjectsActiveFirst = (projects) => ({
    type: LIST.SET_AND_ACTIVE_FIRST,
    projects: projects
})

export const addProject = (project) => ({
    type: LIST.ADD_PROJECT,
    project
})

export const removeProject = (project) => ({
    type: LIST.REMOVE_PROJECT,
    project
})