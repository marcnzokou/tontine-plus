import * as actions from './';

let memberId = 0;

// add to member 
export const addToMember = (member) => {
    return {
        type: actions.ADD_TO_MEMBER,
        payload: { 
            id: memberId++,
            ...member
        }
    };
};

export const receiveToMember = (member) => {
    return {
      type: actions.RECEIVE_TO_ADD_MEMBER,
      payload: member
    };
};

export const getAllMembers = () => {
    return {
        type: actions.GET_ALL_MEMBERS
    };
};

export const receiveMembers = (members) => {
    console.log(members);
    return {
      type: actions.RECEIVE_MEMBERS,
      payload: members
    };
};