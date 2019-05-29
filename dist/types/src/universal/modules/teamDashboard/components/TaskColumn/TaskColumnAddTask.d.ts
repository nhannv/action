import React from 'react';
import { AreaEnum, ITeam, TaskStatusEnum } from 'universal/types/graphql';
import { TaskColumnAddTask_tasks } from '__generated__/TaskColumnAddTask_tasks.graphql';
interface Props {
    area: AreaEnum;
    isMyMeetingSection?: boolean;
    meetingId?: string;
    status: TaskStatusEnum;
    tasks: TaskColumnAddTask_tasks;
    myTeamMemberId?: string;
    teamMemberFilterId: string;
    teams: ReadonlyArray<Pick<ITeam, 'id' | 'name'>>;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "area" | "meetingId" | "tasks" | "status" | "teams" | "isMyMeetingSection" | "myTeamMemberId" | "teamMemberFilterId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskColumnAddTask.d.ts.map