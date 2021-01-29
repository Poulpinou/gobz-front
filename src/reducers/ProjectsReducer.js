import * as types from '../constants/actions/ProjectsActionTypes';

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

        case types.UPDATE_ACTIVE_PROJECT:
            return {
                ...state,
                active: {
                    ...state.active,
                    ...action.project
                },
                list: state.list.map(project => project.id === action.project?.id ? action.project : project)
            }

        case types.FETCH_ACTIVE_PROJECT:
            return {
                ...state,
                active: action.project,
                list: state.list.map(project => project.id === action.project?.id ? action.project : project)
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

        case types.ADD_PROJECT:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.project
                ]
            }

        case types.REMOVE_PROJECT:
            return {
                ...state,
                active: (state.active?.id === action.project.id) ? null : state.active,
                list: state.list.filter(project => project.id !== action.project?.id)
            }

        default:
            return state;
    }
}

export default projects;