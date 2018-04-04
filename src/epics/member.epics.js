import 'rxjs';
import { combineEpics } from 'redux-observable';
import { api } from '../services';
import * as actions from '../actions';
import * as memberActions from '../actions/member.actions';
import { getMemberSelected } from '../reducers/member.reducers';

/**
 * add to member
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
const addMember = (action$) => {
    return action$
    .ofType(actions.ADD_MEMBER)
    .switchMap(({ id, member }) => api.addMember(id, member).map(memberActions.receiveMember));
};

/**
 * add to member
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
const updateMember = (action$, store) => {
    return action$
    .ofType(actions.UPDATE_MEMBER)
    .switchMap(({ member }) => {
        const { id } = getMemberSelected(store.getState().members);
        return api.updateMember(id, member).map(memberActions.receiveMember);
    });
};


/**
 * add to member
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
const addSettingMember = (action$, store) => {
    return action$
    .ofType(actions.ADD_MEMBER_SETTING)
    .switchMap(({ settings }) => {
        const { id } = getMemberSelected(store.getState().members);
        return api.addSettingMember(id, settings).map(memberActions.receiveMember);
    });
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
        return api.getAllMembers().map(memberActions.receiveAllMembers);
    });
};

const memberEpics = combineEpics(
    getAllMembers,
    addMember,
    updateMember,
    addSettingMember
);

export default memberEpics;