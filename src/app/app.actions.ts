import {Action} from '@ngrx/store';

export enum AppActionTypes {
  INIT_APP = '[App] Init App',
}

export class InitApp implements Action {
  readonly type = AppActionTypes.INIT_APP;

  constructor() {
  }
}
