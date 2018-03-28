import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import members from './member.reducers';

export default combineReducers({
    form: reduxFormReducer,
    members
});