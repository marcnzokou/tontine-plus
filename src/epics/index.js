import { combineEpics } from 'redux-observable';
import members from './member.epics';

export const rootEpic = combineEpics(
    members
);