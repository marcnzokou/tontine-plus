import * as types from '../constants/ActionTypes';

let memberId = 0;

// add to member 
export const addToMember = member => {
    return {
        type: types.ADD_TO_MEMBER,
        payload: { 
            id: memberId++,
            ...member
        }
    };
};