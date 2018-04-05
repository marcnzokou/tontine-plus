import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import members from './member.reducers';
import session from './session.reducers';
import memberships from './membership.reducers';

export default combineReducers({
    form: reduxFormReducer,
    session,
    members,
    memberships
});