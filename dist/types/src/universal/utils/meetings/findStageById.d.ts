export interface FindStageByIdStage {
    id: string;
}
export interface FindStageByIdPhase {
    stages: ReadonlyArray<FindStageByIdStage>;
}
declare const findStageById: <T extends FindStageByIdPhase>(phases: readonly T[] | null | undefined, foreginKey: string, stageKey?: string) => {
    phase: T;
    stage: T["stages"][0] & FindStageByIdStage;
    stageIdx: number;
} | undefined;
export default findStageById;
//# sourceMappingURL=findStageById.d.ts.map