import { combineReducers } from 'redux';

import currentUser from './CurrentUserReducer';

const rootReducer = combineReducers({
    currentUser
})

export default rootReducer;