import {
    ADD_MEMBERSHIPS,
    RECEIVE_ALL_MEMBERSHIPS
} from '../actions';
import _ from 'lodash';

const membershipsReducers = (state = {}, action) => {
    switch (action.type) {

        case ADD_MEMBERSHIPS:
            return {
                ...state,
                [action.payload.session.labelSession]: {
                    [action.payload.session.labelMonth]:[
                        ...state[action.payload.session.labelSession][action.payload.session.labelMonth],
                        {
                            id: action.payload.id
                        } 
                    ]
                }
            };

        case RECEIVE_ALL_MEMBERSHIPS:
            return {
                ...action.memberships
            };
           
        default:
            return state;
    }
};
/**
 * Test if member has membership
 * @param {*} state 
 * @param {*} session 
 * @param {*} id 
 */
export const checkMemberships = (state= [], session, id) => {
    let datas = [];
    if(!_.isEmpty(state) && 
        !_.isEmpty(state[session.labelSession]) &&
        !_.isEmpty(state[session.labelSession][session.labelMonth])
    ) {
        datas = state[session.labelSession][session.labelMonth];
    }
    var result = datas.some((item)=> item.id === id);
    return result;
};


export default membershipsReducers;