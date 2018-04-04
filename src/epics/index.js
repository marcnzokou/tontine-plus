import { combineEpics } from 'redux-observable';
import members from './member.epics';
import sessions from './session.epics';

export const rootEpic = combineEpics(
    members,
    sessions
);