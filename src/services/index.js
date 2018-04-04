import apiMember from './member.services';
import apiSession from './session.services';

export const api = {
    ...apiSession,
    ...apiMember
};




    
