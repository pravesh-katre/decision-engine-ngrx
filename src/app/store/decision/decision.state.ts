import { Criteria } from "./decision.model";
import { Option } from "./decision.model";

export interface DecisionState {
    criteria: Criteria[];
    options: Option[];
}

export const initialDecisionState: DecisionState = {
    criteria: [],
    options: []
}