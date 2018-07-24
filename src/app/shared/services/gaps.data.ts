
export interface Gaps {
    id;
    care_gaps;
    interventions;
    priority;
    comments;
    status;
}
export interface MemberCareGaps {
    id;
    care_gaps;
    age;
    gender;
    pcp;
    care_gaps_count;
    name;
    risk_grade;
    plan;
    time_period;
}

export enum priorityTypes {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
}

