import {
    ADD_MEMBER,
    // RECEIVE_ALL_MEMBERS,
    SELECT_MEMBER,
    // UPDATE_MEMBER
} from '../actions';


const memberReducers = (state = [], action) => {
    switch (action.type) {
        
        case ADD_MEMBER:
            return [
                ...state,
                {
                    id: action.id,
                    member: action.member,
                    selected: false
                }
            ];

        case SELECT_MEMBER:
            return state.map(item =>
                (item.id === action.id)
                ? {...item, selected: true}
                : {...item, selected: false}
            );
           
        // case RECEIVE_ALL_MEMBERS:
        //     return action.payload;
            
        default:
            return state;
    }
};

export const getMemberSelected = (state = []) => state.filter((item) => (item.selected == true));



export default memberReducers;
