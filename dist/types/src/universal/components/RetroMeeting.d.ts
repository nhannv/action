import { RetroMeeting_viewer } from '__generated__/RetroMeeting_viewer.graphql';
import React, { ReactElement } from 'react';
import { useGotoNext } from 'universal/hooks/useMeeting';
interface Props {
    viewer: RetroMeeting_viewer;
}
export interface RetroMeetingPhaseProps {
    handleGotoNext: ReturnType<typeof useGotoNext>;
    isDemoStageComplete: boolean;
    meetingSettings: any;
    team: any;
    toggleSidebar: () => void;
    avatarGroup: ReactElement;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RetroMeeting.d.ts.map