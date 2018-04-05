import * as actions from './';
const uid = () => Math.random().toString(34).slice(2);



// add to member 
export const addMember = member => ({
    type: actions.ADD_MEMBER,
    id: uid(),
    member
});

export const updateMember = member => ({
    type: actions.UPDATE_MEMBER,
    member
});

export const addSettingMember = settings => ({
    type: actions.ADD_MEMBER_SETTING,
    settings
});

export const receiveMember = (member) => {
    return {
      type: actions.RECEIVE_MEMBER,
      member
    };
};


export const selectMember = id => ({
    type: actions.SELECT_MEMBER,
    id
});

/**
 * get 
 */
export const getAllMembers = () => ({
    type: actions.GET_ALL_MEMBERS
});

export const receiveAllMembers = (members) => ({
    type: actions.RECEIVE_ALL_MEMBERS,
    members
});



