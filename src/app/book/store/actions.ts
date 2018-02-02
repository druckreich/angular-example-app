import {Action} from '@ngrx/store';

export enum RootActionTypes {
  INIT_MODULE = '[Root] Init Module',
}

export class InitModule implements Action {
  readonly type = RootActionTypes.INIT_MODULE;

  constructor() {
  }
}
