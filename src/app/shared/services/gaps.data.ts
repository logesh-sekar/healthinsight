
export interface Gaps {
    id;
    care_gaps;
    interventions;
    priority;
    comments;
    status;
}

export enum priorityTypes {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
}

