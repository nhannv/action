import { RetroDiscussPhase_team } from '__generated__/RetroDiscussPhase_team.graphql';
import React from 'react';
import { RetroMeetingPhaseProps } from 'universal/components/RetroMeeting';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps, RetroMeetingPhaseProps {
    team: RetroDiscussPhase_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar" | "meetingSettings" | "isDemoStageComplete">, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar" | "meetingSettings" | "isDemoStageComplete">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RetroDiscussPhase.d.ts.map