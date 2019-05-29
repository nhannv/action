import { ActionMeetingLastCall_team } from '__generated__/ActionMeetingLastCall_team.graphql';
import React from 'react';
import { ActionMeetingPhaseProps } from 'universal/components/ActionMeeting';
interface Props extends ActionMeetingPhaseProps {
    team: ActionMeetingLastCall_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ActionMeetingLastCall.d.ts.map