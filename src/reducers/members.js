import {
    ADD_TO_MEMBER
} from '../constants/ActionTypes';

const members = (state = [], action) => {
    switch (action.type) {

      case ADD_TO_MEMBER:
        return [
            ...state,
            action.payload
        ];
      
      default:
        return state;
    }
};

export default members;