/// <reference path="constants.d.ts" />
/// <reference types="react" />
interface Meeting {
    reflectionGroups: {
        reflections: {
            id: string;
        }[];
        voteCount: number;
    }[];
    meetingMembers: {
        isCheckedIn: boolean | null;
        tasks: {
            id: string;
        }[];
    }[];
}
declare const makeRetroStats: (meeting: Meeting) => {
    value: import("react").ReactText;
    label: string;
}[];
export default makeRetroStats;
//# sourceMappingURL=makeRetroStats.d.ts.map