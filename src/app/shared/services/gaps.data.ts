
export interface Gaps {
    qualityMeasureId;
    measureTitle;
    intervention;
    priority;
    payerComments;
    providerComments;
    status;
    dateTime;
}
export interface CloseGaps {
    memberId: number;
    name: string;
    gender: string;
    dateOfBirth: string;
    careGaps: Gaps[];
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

