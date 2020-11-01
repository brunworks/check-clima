import { createAction, props } from '@ngrx/store';

export const changeText = createAction(
  // Primeiro inidica qual feature disparou a ação [] e o nome da ação
  '[Home] Change Text',
  //Prepara o despache
  props<{text: string}>()
)
