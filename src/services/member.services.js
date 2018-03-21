import { memberList, saved } from './mock/_members';
import { Observable } from 'rxjs/Observable';

const TIMEOUT = 100;
// const MAX_CHECKOUT = 2; // max different items
 

const getMembers = () => {
    return new Observable(observer => {
        const timerId = setTimeout(() => {
          observer.next(memberList);
          observer.complete();
        }, TIMEOUT);
        return () => clearTimeout(timerId);
    });
};

const addMember = (member) => {
    
    memberList.push(member);
    saved(memberList);

    return new Observable(observer => {
        const timerId = setTimeout(() => {
          observer.next(member);
          observer.complete();
        }, TIMEOUT);
        return () => clearTimeout(timerId);
    });
};

export default {
    getMembers,
    addMember
};