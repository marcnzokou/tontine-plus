import apiMember from './member.services';
import apiSession from './session.services';
import apiMembership from './membership.service';

export const api = {
    ...apiSession,
    ...apiMember,
    ...apiMembership
};




    
