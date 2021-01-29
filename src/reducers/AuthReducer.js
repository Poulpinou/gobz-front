import * as types from '../constants/actions/AuthActionTypes';

const auth = (state = null, action) => {
    switch (action.type) {
        case types.SET_LOGGED_USER:
            return {
                ...state,
                currentUser: action.user,
                authenticated: true
            }

        case types.LOGOUT_USER:
            return {
                ...state,
                currentUser: null,
                authenticated: false
            }

        default:
            return state;
    }
}

export default auth;