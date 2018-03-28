import * as actions from './';
const uid = () => Math.random().toString(34).slice(2);

// add to member 
export const addMember = member => ({
    type: actions.ADD_MEMBER,
    id: uid(),
    member
});

export const addSettingMember = setting => ({
    type: actions.ADD_MEMBER_SETTING,
    setting
});

export const setVisibilityFilter = filter => ({
    type: actions.SET_VISIBILITY_FILTER,
    filter
});

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
    payload: members
});

// // select member 
// export const selectMember = (member) => {
//     return {
//       type: actions.SELECT_MEMBER,
//       payload: member
//     };
// };

// export const updateMember = (member) => {
//     return {
//       type: actions.UPDATE_MEMBER,
//       payload: member
//     };
// };


// export const receiveMember = (member) => {
//     return {
//       type: actions.RECEIVE_MEMBER,
//       payload: member
//     };
// };


