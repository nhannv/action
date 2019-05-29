declare const makeDiscussionStage: (reflectionGroupId: string, meetingId: string, sortOrder: number, id: string) => {
    id: string;
    meetingId: string;
    isComplete: boolean;
    isNavigable: boolean;
    isNavigableByFacilitator: boolean;
    phaseType: any;
    reflectionGroupId: string;
    sortOrder: number;
    startAt: Date | undefined;
    viewCount: number;
};
export default makeDiscussionStage;
//# sourceMappingURL=makeDiscussionStage.d.ts.map