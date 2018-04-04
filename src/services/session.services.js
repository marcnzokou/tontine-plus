import { Observable } from 'rxjs/Observable';
// import { ajax } from 'rxjs/observable/dom/ajax';


const today = new Date();
const year = today.getFullYear();
const day = today.getDate();
const month =  today.getMonth()+1;
const TIMEOUT = 100;

const session = {
    currentSession: year,
    currentMonth: month,
    currentDay: day,
    labelSession: 'S_'+year,
    labelMonth: 'M_'+month,
    selectedMonth: month,
    selectedSession: year
};

export const getSession = () => {
    return new Observable(observer => {
        const timerId = setTimeout(() => {
          observer.next(session);
          observer.complete();
        }, TIMEOUT);
        return () => clearTimeout(timerId);
    });
};


export default {
    getSession
};