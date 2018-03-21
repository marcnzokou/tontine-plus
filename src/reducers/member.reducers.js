import {
    ADD_TO_MEMBER,
    RECEIVE_MEMBERS,
    // RECEIVE_TO_ADD_MEMBER
} from '../actions';

const initialState = [];

const memberReducers = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_MEMBER:
            return [
                ...state,
                action.payload
            ];
        
        // case RECEIVE_TO_ADD_MEMBER:
        // //     return [
        // //         ...state,
        // //         action.payload
        // //     ];

        case RECEIVE_MEMBERS:
            state = action.payload;
            return state;
            
        default:
            return state;
    }
};

export default memberReducers;