interface Phase {
    phaseType: string;
    stages: ReadonlyArray<{
        id: string;
        isNavigable: boolean;
        isNavigableByFacilitator: boolean;
    }>;
}
declare const getSidebarItemStage: <T extends readonly Phase[]>(name: string, phases: T, facilitatorStageId: string) => {
    id: string;
    isNavigable: boolean;
    isNavigableByFacilitator: boolean;
} | undefined;
export default getSidebarItemStage;
//# sourceMappingURL=getSidebarItemStage.d.ts.map