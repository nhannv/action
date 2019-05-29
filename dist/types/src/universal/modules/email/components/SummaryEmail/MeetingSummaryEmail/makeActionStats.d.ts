/// <reference path="constants.d.ts" />
/// <reference types="react" />
interface Meeting {
    meetingMembers: {
        isCheckedIn: boolean | null;
        doneTasks: {
            id: string;
        }[];
        tasks: {
            id: string;
        }[];
    }[];
    phases: {
        phaseType: string;
        stages: {
            isComplete: boolean;
        }[];
    }[];
}
declare const makeActionStats: (meeting: Meeting) => {
    value: import("react").ReactText;
    label: string;
}[];
export default makeActionStats;
//# sourceMappingURL=makeActionStats.d.ts.map