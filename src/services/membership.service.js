import { getAll, saved } from './mock/_memberships';
import { Observable } from 'rxjs/Observable';
import { getSession } from './session.services';
// import { ajax } from 'rxjs/observable/dom/ajax';

const TIMEOUT = 100;
// const MAX_CHECKOUT = 2; // max different items
 

const getAllMembership = () => {
    var list = getAll();
    return getSession().map(values => {
        const tab = {
            ...list,
            [values.labelSession]:{
                [values.labelMonth]:[]
            }
        };
        if(!list) {
            saved(tab);
            return tab;
        } else {
            return list;
        }
    });
};

const addMembership = (payload) => {
    var list = getAll();
    list[payload.session.labelSession][payload.session.labelMonth].push({id: payload.id});
    saved(list);

    return new Observable(observer => {
        const timerId = setTimeout(() => {
          observer.next(payload.id);
          observer.complete();
        }, TIMEOUT);
        return () => clearTimeout(timerId);
    });
};

export default {
    getAllMembership,
    addMembership
};