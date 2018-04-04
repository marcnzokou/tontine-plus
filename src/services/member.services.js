import { getAll, saved } from './mock/_members';
import { Observable } from 'rxjs/Observable';
// import { ajax } from 'rxjs/observable/dom/ajax';

const TIMEOUT = 100;
// const MAX_CHECKOUT = 2; // max different items
 

const getAllMembers = () => {
    var list = getAll();
    return new Observable(observer => {
        const timerId = setTimeout(() => {
          observer.next(list);
          observer.complete();
        }, TIMEOUT);
        return () => clearTimeout(timerId);
    });
};

const addMember = (id, member) => {
    var list = getAll();
    list.push({id, member});
    saved(list);

    return new Observable(observer => {
        const timerId = setTimeout(() => {
          observer.next({id, member});
          observer.complete();
        }, TIMEOUT);
        return () => clearTimeout(timerId);
    });
};

const updateMember = (id, member) => {
    var list = getAll();
    var updateMember =  list.map(item =>
        (item.id === id)
        ? { ...item, member: member }
        : { ...item }
    );
    saved(updateMember);

    return new Observable(observer => {
        const timerId = setTimeout(() => {
          observer.next(member);
          observer.complete();
        }, TIMEOUT);
        return () => clearTimeout(timerId);
    });
};

const addSettingMember = (id, settings) => {
    var list = getAll();
    var updateMember =  list.map(item =>
        (item.id === id)
        ? { ...item, settings: settings }
        : { ...item }
    );
    saved(updateMember);

    return new Observable(observer => {
        const timerId = setTimeout(() => {
          observer.next(settings);
          observer.complete();
        }, TIMEOUT);
        return () => clearTimeout(timerId);
    });
};

export default {
    getAllMembers,
    addMember,
    updateMember,
    addSettingMember
};