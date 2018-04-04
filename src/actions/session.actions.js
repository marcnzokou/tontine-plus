import * as actions from './';


export const selectMonth = item => ({
    type: actions.SELECT_MONTH,
    item
});

/**
 * get 
 */
export const getSession = () => ({
    type: actions.CURRENT_SESSION
});

export const receiveDataSession = (paylaod) => ({
    type: actions.RECEIVE_DATA_SESSION,
    paylaod
});

