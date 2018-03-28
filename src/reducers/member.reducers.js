import {
    ADD_MEMBER,
    RECEIVE_ALL_MEMBERS,
    SELECT_MEMBER,
    ADD_MEMBER_SETTING
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

        case ADD_MEMBER_SETTING:
            const { id } = getMemberSelected(state);
            return state.map(item =>
                (item.id === id)
                ? {...item, setting: { ...action.setting }}
                : {...item}
            );

        case SELECT_MEMBER:
            return state.map(item =>
                (item.id === action.id)
                ? {...item, selected: true}
                : {...item, selected: false}
            );
           
        case RECEIVE_ALL_MEMBERS:
            return [
                ...action.members
            ];
            
        default:
            return state;
    }
};

export const getMemberSelected = (state = []) => {
    const tab = state.filter((item) => (item.selected == true));
    return (tab.length > 0) ? { ...tab[0] } : {};
};



export default memberReducers;
