import * as types from '../constant/type/action/UserActionTypes';

const auth = (state = null, action) => {
    switch (action.type) {
        case types.SET_LOGGED_USER:
            return {
                currentUser: action.user,
                authenticated: true
            } 

        case types.LOGOUT_USER:
            return {
                currentUser: null,
                authenticated: false
            } 
    
        default:
            return state;
    }
}

export default auth;