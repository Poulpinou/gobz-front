import * as types from '../constant/type/action/UserActionTypes';

export const setLoggedUser = (user) => ({
    type: types.SET_LOGGED_USER,
    user
})

export const logoutUser = () => ({
    type: types.LOGOUT_USER
})