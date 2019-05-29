import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { AreaEnum, ITask, TaskStatusEnum } from 'universal/types/graphql';
import { TaskColumn_tasks } from '__generated__/TaskColumn_tasks.graphql';
interface Props extends WithAtmosphereProps {
    area: AreaEnum;
    getTaskById: (taskId: string) => Partial<ITask> | undefined | null;
    isMyMeetingSection?: boolean;
    meetingId?: string;
    myTeamMemberId?: string;
    tasks: TaskColumn_tasks;
    status: TaskStatusEnum;
    teamMemberFilterId?: string;
    teams: any[];
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "area" | "meetingId" | "tasks" | "status" | "teams" | "getTaskById" | "isMyMeetingSection" | "myTeamMemberId" | "teamMemberFilterId">, "area" | "meetingId" | "tasks" | "status" | "teams" | "getTaskById" | "isMyMeetingSection" | "myTeamMemberId" | "teamMemberFilterId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskColumn.d.ts.map