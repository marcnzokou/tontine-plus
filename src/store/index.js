import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

import reducer from '../reducers';
import { rootEpic } from '../epics';
import * as memberActions from '../actions/member.actions';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware, epicMiddleware)
);

store.dispatch(memberActions.getAllMembers());

export default store;