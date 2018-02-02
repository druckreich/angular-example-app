import {ActionReducer, MetaReducer, ActionReducerMap} from '@ngrx/store';
import {environment} from '../../environments/environment';

// ---------------> Logger and Metareducer

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state: any, action: any): any {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [logger] : [];

export const reducers: ActionReducerMap<any> = {};

