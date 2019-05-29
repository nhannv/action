import { FindStageByIdPhase } from 'universal/utils/meetings/findStageById';
declare const findStageAfterId: <T extends FindStageByIdPhase>(phases: readonly T[] | null | undefined, stageId: string) => {
    phase: T;
    stage: import("./findStageById").FindStageByIdStage;
} | undefined;
export default findStageAfterId;
//# sourceMappingURL=findStageAfterId.d.ts.map