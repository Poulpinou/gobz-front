import * as types from '../constant/action/ProjectsActionTypes';

const initialValue = {
    active: null,
    list: []
}

const projects = (state = initialValue, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_PROJECT:
            return {
                ...state,
                active: action.active
            }

        case types.SET_PROJECTS:
            return {
                ...state,
                list: action.projects
            }

        case types.SET_PROJECTS_ACTIVE_FIRST:
            return {
                ...state,
                active: action.projects?.length > 0 ? action.projects[0] : null,
                list: action.projects
            }
    
        default:
            return state;
    }
}

export default projects;