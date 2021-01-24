import { combineReducers } from 'redux';

import auth from './CurrentUserReducer';
import projects from './ProjectReducer';

const rootReducer = combineReducers({
    auth, 
    projects
})

export default rootReducer;