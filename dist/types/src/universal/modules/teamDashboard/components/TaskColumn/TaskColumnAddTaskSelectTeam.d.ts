/// <reference types="react" />
import { ITeam, TaskStatusEnum } from 'universal/types/graphql';
interface Props {
    status: TaskStatusEnum;
    sortOrder: number;
    teams: ReadonlyArray<Pick<ITeam, 'id' | 'name'>>;
}
declare const TaskColumnAddTaskSelectTeam: (props: Props) => JSX.Element;
export default TaskColumnAddTaskSelectTeam;
//# sourceMappingURL=TaskColumnAddTaskSelectTeam.d.ts.map