import { createReducer, Action, on } from '@ngrx/store'

import * as fromHomeActions from './home.actions';

export interface HomeState {

  text: string;
  //text2: string;

}

//Estado inicial

export const homeInitialState: HomeState = {

  text: "São Paulo",
  //text2: "QWE"

}

const reducer = createReducer(
  homeInitialState,
  // nétodo para lidar com as actions
  // quando a action abaixo fro disparada, este reducer cuidará dela
  on(fromHomeActions.changeText, (state, {text}) => ({
    ...state,
    text
  }))
);

//

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action);

}
