import 'rxjs';
import { combineEpics } from 'redux-observable';
import { api } from '../services';
import * as actions from '../actions';
import * as memberActions from '../actions/member.actions';


/**
 * add to member
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
const addMember = (action$) => {
    return action$
    .ofType(actions.ADD_TO_MEMBER)
    .switchMap(action => api.addMember(action.payload).map(memberActions.receiveToMember));
};

/**
 * get member
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
const getAllMembers = (action$) => {
    return action$
    .ofType(actions.GET_ALL_MEMBERS)
    .switchMap(() => {
        return api.getMembers().map(memberActions.receiveMembers);
    });
};

const memberEpics = combineEpics(
    getAllMembers,
    addMember
);

export default memberEpics;