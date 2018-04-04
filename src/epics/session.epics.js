import 'rxjs';
import { combineEpics } from 'redux-observable';
import { api } from '../services';
import * as actions from '../actions';
import * as sessionActions from '../actions/session.actions';

/**
 * add to member
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
const getSession = (action$) => {
    return action$
    .ofType(actions.CURRENT_SESSION)
    .switchMap(() =>  api.getSession().map(sessionActions.receiveDataSession));
};

const sessionEpics = combineEpics(
    getSession
);

export default sessionEpics;