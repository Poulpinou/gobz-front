import {ACTIVE} from "../../constants/actions/ProjectsActionTypes";

export const setActiveProject = (project) => ({
    type: ACTIVE.SET,
    active: project
})

export const updateActiveProject = (project) => ({
    type: ACTIVE.UPDATE,
    project: project
})

export const fetchActiveProject = (project) => ({
    type: ACTIVE.FETCH,
    project:{
        ...project,
        isFull: true
    }
})