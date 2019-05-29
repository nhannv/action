import { ActionMeetingLobby_team } from '__generated__/ActionMeetingLobby_team.graphql';
import React from 'react';
import { ActionMeetingPhaseProps } from 'universal/components/ActionMeeting';
interface Props extends ActionMeetingPhaseProps {
    team: ActionMeetingLobby_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ActionMeetingLobby.d.ts.map