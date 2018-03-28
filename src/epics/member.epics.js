import 'rxjs';
import { combineEpics } from 'redux-observable';
import { api } from '../services';
import * as actions from '../actions';
import * as memberActions from '../actions/member.actions';


// /**
//  * add to member
//  * @param action$
//  * @param store
//  * @returns {any|*|Observable}
//  */
// const addMember = (action$) => {
//     return action$
//     .ofType(actions.ADD_MEMBER)
//     .mergeMap(({ payload }) => api.addMember(payload).map(memberActions.receiveMember));
// };


// /**
//  * update setting to member
//  * @param action$
//  * @param store
//  * @returns {any|*|Observable}
//  */
// const updateMember = (action$) => {
//     return action$
//     .ofType(actions.UPDATE_MEMBER)
//     .switchMap(({ payload }) => api.updateMember(payload).map(memberActions.receiveMember));
// };

// /**
//  * get member
//  * @param action$
//  * @param store
//  * @returns {any|*|Observable}
//  */
const getAllMembers = (action$) => {
    return action$
    .ofType(actions.GET_ALL_MEMBERS)
    .switchMap(() => {
        return api.getAllMembers().map(memberActions.receiveAllMembers);
    });
};

const memberEpics = combineEpics(
    getAllMembers,
    // addMember,
    // updateMember
);

export default memberEpics;