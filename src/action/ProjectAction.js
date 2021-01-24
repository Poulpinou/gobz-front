import * as types from '../constant/type/action/ProjectActionTypes';

export const setActiveProject = (project) => ({
    type: types.SET_ACTIVE_PROJECT,
    active: project
})