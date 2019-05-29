declare const UNSTARTED_MEETING: UnstartedMeeting;
export interface UnstartedMeeting {
    id: string;
    facilitatorUserId: string;
    facilitatorStageId: string;
    phases: ReadonlyArray<any>;
    localPhase: null;
    localStage: null;
}
export default UNSTARTED_MEETING;
//# sourceMappingURL=unstartedMeeting.d.ts.map