import React from 'react';
import { AreaEnum } from 'universal/types/graphql';
import { TaskColumns_tasks } from '__generated__/TaskColumns_tasks.graphql';
interface Props {
    area: AreaEnum;
    getTaskById: (taskId: string) => any;
    isMyMeetingSection?: boolean;
    meetingId?: string;
    myTeamMemberId?: string;
    tasks: TaskColumns_tasks;
    teamMemberFilterId?: string;
    teams?: any;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "area" | "meetingId" | "tasks" | "teams" | "getTaskById" | "isMyMeetingSection" | "myTeamMemberId" | "teamMemberFilterId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskColumns.d.ts.map