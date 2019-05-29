import React from 'react';
import { ActionMeetingPhaseProps } from 'universal/components/ActionMeeting';
import { ActionMeetingAgendaItems_team } from '__generated__/ActionMeetingAgendaItems_team.graphql';
interface Props extends ActionMeetingPhaseProps {
    team: ActionMeetingAgendaItems_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ActionMeetingAgendaItems.d.ts.map