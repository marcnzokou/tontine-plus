import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

import reducer from '../reducers';
import { rootEpic } from '../epics';
import * as memberActions from '../actions/member.actions';
import * as sessionActions from '../actions/session.actions';
import * as membershipActions from '../actions/membership.action';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware, epicMiddleware)
);


/**
 * init state
 */
store.dispatch(memberActions.getAllMembers());
store.dispatch(sessionActions.getSession());
store.dispatch(membershipActions.getAllMembership());

export default store;