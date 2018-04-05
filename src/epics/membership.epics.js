import 'rxjs';
import { combineEpics } from 'redux-observable';
import { api } from '../services';
import * as actions from '../actions';
import * as membershipActions from '../actions/membership.action';

/**
 * add to member
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
const getAllMembership = (action$) => {
    return action$
    .ofType(actions.GET_ALL_MEMBERSHIPS)
    .switchMap(() =>{
        return api.getAllMembership().map(membershipActions.receiveAllMembership);
    });
};

const addMembership = (action$) => {
    return action$
    .ofType(actions.ADD_MEMBERSHIPS)
    .switchMap((action) =>  api.addMembership(action.payload).map(membershipActions.receiveMembership));
};

const membershipEpics = combineEpics(
    getAllMembership,
    addMembership
);

export default membershipEpics;