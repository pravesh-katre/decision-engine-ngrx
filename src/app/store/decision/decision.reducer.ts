import { createReducer, on } from '@ngrx/store';
import { initialDecisionState } from './decision.state';
import { addCriteria, addOption } from './decision.actions';

export const decisionReducer = createReducer(
  initialDecisionState,

  on(addCriteria, (state, { criteria }) => ({
    ...state,
    criteria: [...state.criteria, criteria]
  })),

  on(addOption, (state, { option }) => ({
    ...state,
    options: [...state.options, option]
  }))
);