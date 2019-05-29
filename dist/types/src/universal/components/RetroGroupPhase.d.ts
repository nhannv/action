import { RetroGroupPhase_team } from '__generated__/RetroGroupPhase_team.graphql';
import React from 'react';
import { RetroMeetingPhaseProps } from 'universal/components/RetroMeeting';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends RetroMeetingPhaseProps, WithMutationProps, WithAtmosphereProps {
    team: RetroGroupPhase_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar" | "meetingSettings" | "isDemoStageComplete">, "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar" | "meetingSettings" | "isDemoStageComplete"> & React.RefAttributes<any>, "ref" | "key" | "team" | "avatarGroup" | "handleGotoNext" | "toggleSidebar" | "meetingSettings" | "isDemoStageComplete">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RetroGroupPhase.d.ts.map