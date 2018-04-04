import {
    ADD_MEMBER,
    RECEIVE_ALL_MEMBERS,
    SELECT_MEMBER,
    ADD_MEMBER_SETTING,
    UPDATE_MEMBER
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

        case UPDATE_MEMBER:
            var { id } = getMemberSelected(state);
            return state.map(item =>
                (item.id === id)
                ? { ...item, member: action.member }
                : { ...item }
            );

        case ADD_MEMBER_SETTING:
            var { id } = getMemberSelected(state);

            return state.map(item =>
                (item.id === id)
                ? { ...item, settings: action.settings }
                : { ...item }
            );

        case SELECT_MEMBER:
            return state.map(item =>
                (item.id === action.id) ?
                {...item, selected: true } :
                {...item, selected: false }
            );

        case RECEIVE_ALL_MEMBERS:
            return [
                ...action.members
            ];

        default:
            return state;
    }
};


/**
 * get member selected
 * @param {} state 
 */
export const getMemberSelected = (state = []) => {
    const tab = state.filter((item) => (item.selected == true));
    return (tab.length > 0) ? {...tab[0] } : undefined;
};

/**
 * get month
 * @param {*} month 
 * @param {*} state 
 */
export const getMemberOfMonth = (month, labelSession, state = []) => {
    var values = state.filter((item)=> {
        if(item.settings[labelSession]){
            if(item.settings[labelSession].payMonth) {
                return parseInt(item.settings[labelSession].payMonth) === parseInt(month.value);
            }
        }
    });
    return values;
};


export default memberReducers;