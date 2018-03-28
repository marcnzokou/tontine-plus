import apiMember from './member.services';
import { MonthDatas } from '../models/datas';


export const api = {
    ...apiMember
};


export const SESSION = '2018';
export const NB_MONTH = 12;
const today = new Date();

/***
 * get label of month
 */
export const getLabelMonth = value => {
    const result = MonthDatas.filter((item) => item.value == value);
    return (result.length === 1) ? result[0].label : undefined;
};

/***
 * get session label of month
 */
export const getLabelSessionlMonth = (value) => {
    return getLabelMonth(value) + ' ' + SESSION;
};

export const getDate = () => today.getDate();
export const getMonth = () => today.getMonth()+1;
export const getFullYear = () => today.getFullYear();


    
