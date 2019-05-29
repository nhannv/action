import React from 'react';
import { MeetingAgendaCards_tasks } from '__generated__/MeetingAgendaCards_tasks.graphql';
interface Props {
    agendaId?: string;
    maxCols?: number;
    meetingId: string;
    reflectionGroupId?: string;
    tasks: MeetingAgendaCards_tasks;
    showPlaceholders?: boolean;
    teamId: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "meetingId" | "reflectionGroupId" | "teamId" | "tasks" | "agendaId" | "maxCols" | "showPlaceholders">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=MeetingAgendaCards.d.ts.map