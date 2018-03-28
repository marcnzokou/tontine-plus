import { memberList, saved } from './mock/_members';
import { Observable } from 'rxjs/Observable';
// import { ajax } from 'rxjs/observable/dom/ajax';

const TIMEOUT = 100;
// const MAX_CHECKOUT = 2; // max different items
 

const getAllMembers = () => {
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

const updateMember = (member) => {

    var updateMember = memberList.map(item => {
        if(item.id === member.id) {
            return member;
        }
        return item;
    });
    saved(updateMember);

    return new Observable(observer => {
        const timerId = setTimeout(() => {
          observer.next(member);
          observer.complete();
        }, TIMEOUT);
        return () => clearTimeout(timerId);
    });
};

export default {
    getAllMembers,
    addMember,
    updateMember
};