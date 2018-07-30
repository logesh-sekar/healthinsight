
export interface Gaps {
    memberId;
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
    age;
    gender;
    countOfCareGaps;
    name;
    riskGrade;
    timePeriod: string;
    plan: string;
    pcp: string;
    careGaps: string;
}

export enum priorityTypes {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
}

