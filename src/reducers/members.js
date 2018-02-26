import {
    ADD_TO_MEMBER
} from '../constants/ActionTypes';

const initialState = {
    count: 0,
    datas: []
};

const members = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_MEMBER:
            return {
                ...state,
                count: state.count + 1,
                datas: [
                    ...state.datas,
                    action.payload
                ]
            };
        default:
            return state;
    }
};


export default members;