import { RetroVotePhase_team } from '__generated__/RetroVotePhase_team.graphql';
import React from 'react';
import { RetroMeetingPhaseProps } from 'universal/components/RetroMeeting';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { RetroVotePhase_meetingSettings } from '__generated__/RetroVotePhase_meetingSettings.graphql';
interface Props extends WithAtmosphereProps, RetroMeetingPhaseProps {
    meetingSettings: RetroVotePhase_meetingSettings;
    team: RetroVotePhase_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar" | "meetingSettings" | "isDemoStageComplete">, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar" | "meetingSettings" | "isDemoStageComplete">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RetroVotePhase.d.ts.map