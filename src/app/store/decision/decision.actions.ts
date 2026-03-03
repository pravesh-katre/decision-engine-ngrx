import { createAction, props } from '@ngrx/store';
import { Criteria, Option } from './decision.model';

export const addCriteria = createAction(
  '[Decision] Add Criteria',
  props<{ criteria: Criteria }>()
);

export const addOption = createAction(
  '[Decision] Add Option',
  props<{ option: Option }>()
);