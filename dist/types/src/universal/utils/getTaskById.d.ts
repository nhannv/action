interface Task {
    id: string;
}
declare const getTaskById: <T extends Task>(taskArr: readonly T[]) => (taskId: string) => T | null | undefined;
export default getTaskById;
//# sourceMappingURL=getTaskById.d.ts.map