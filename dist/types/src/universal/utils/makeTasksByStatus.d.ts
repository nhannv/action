import { TaskStatusEnum } from 'universal/types/graphql';
interface Task {
    status: string;
    sortOrder: number;
}
export default function makeTasksByStatus<T extends Task>(tasks: ReadonlyArray<T>): {
    [TaskStatusEnum.active]: T[];
    [TaskStatusEnum.stuck]: T[];
    [TaskStatusEnum.done]: T[];
    [TaskStatusEnum.future]: T[];
};
export {};
//# sourceMappingURL=makeTasksByStatus.d.ts.map