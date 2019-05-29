import { RetroLobby_meetingSettings } from '__generated__/RetroLobby_meetingSettings.graphql';
import { RetroLobby_team } from '__generated__/RetroLobby_team.graphql';
import React from 'react';
import { RetroMeetingPhaseProps } from 'universal/components/RetroMeeting';
interface Props extends RetroMeetingPhaseProps {
    team: RetroLobby_team;
    meetingSettings: RetroLobby_meetingSettings;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar" | "meetingSettings" | "isDemoStageComplete">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RetroLobby.d.ts.map