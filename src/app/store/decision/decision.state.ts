export interface Criteria {
    id: string;
    name: string;
    weight: number; // percentage 0-100
}

export interface Option {
    id: string;
    name: string;
}

export interface DecisionState {
    criteria: Criteria[];
    options: Option[];
}

export const initialDecisionState: DecisionState = {
    criteria: [],
    options: []
}