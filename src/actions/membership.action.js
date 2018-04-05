import * as actions from './';


export const addMembership = (session, id) => ({
    type: actions.ADD_MEMBERSHIPS,
    payload: {
        session,
        id
    }
});
/**
 * get 
 */
export const getAllMembership = () => ({
    type: actions.GET_ALL_MEMBERSHIPS
});

export const receiveAllMembership = (memberships) => ({
    type: actions.RECEIVE_ALL_MEMBERSHIPS,
    memberships
});

export const receiveMembership = (id) => {
    return {
      type: actions.RECEIVE_MEMBERSHIP,
      id
    };
};
