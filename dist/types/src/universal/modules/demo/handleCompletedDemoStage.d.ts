declare const handleCompletedDemoStage: (db: any, stage: any) => Promise<{
    [x: number]: {
        emptyReflectionGroupIds: string[];
    } | null;
} | {
    [x: number]: {
        meetingId: string;
        reflectionGroupIds: any;
    } | null;
} | {
    [x: number]: {
        meetingId?: undefined;
        discussPhaseStages?: undefined;
    } | {
        meetingId: any;
        discussPhaseStages: ({
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
        } & {
            __typename: string;
            reflectionGroup: import("../../types/graphql").IRetroReflectionGroup;
        })[];
    } | null;
}>;
export default handleCompletedDemoStage;
//# sourceMappingURL=handleCompletedDemoStage.d.ts.map