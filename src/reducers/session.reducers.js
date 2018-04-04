import {
   RECEIVE_DATA_SESSION,
   SELECT_MONTH
} from '../actions';
import { MonthDatas } from '../models/datas';

const initializeState = {
    currentSession: '',
    currentMonth: '',
    currentDay: '',
    labelSession: '',
    labelMonth: '',
    selectedMonth: '',
    selectedSession: ''
};

const sessionReducers = (state = initializeState, action) => {
    switch (action.type) {

        case RECEIVE_DATA_SESSION:
            return {
                ...state,
                ...action.paylaod,
            };
        
        case SELECT_MONTH:
            return {
                ...state,
                selectedMonth: action.item
            };
        
        default:
            return state;
    }
};

/**
 * get trigramme
 * @param {*} user 
 * @param {*} datas 
 */
export const getTrigrammeMonth = (user, labelSession, datas = []) => {
    var value = '';
    if(user.settings[labelSession]){
        if(user.settings[labelSession].payMonth) {
            var result = datas.filter((item) => parseInt(item.value) === parseInt(user.settings[labelSession].payMonth));
            value = result[0].trigramme;
        }
    }
    return value;
};

/**
 * return label
 * @param {*} value 
 */
export const getLabelMonth = value => {
    const result = MonthDatas.filter((item) => item.value == value);
    return (result.length === 1) ? result[0].label : undefined;
};


export default sessionReducers;