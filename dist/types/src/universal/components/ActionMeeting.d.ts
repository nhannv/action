import { ActionMeeting_viewer } from '__generated__/ActionMeeting_viewer.graphql';
import React, { ReactElement } from 'react';
import { useGotoNext } from 'universal/hooks/useMeeting';
interface Props {
    viewer: ActionMeeting_viewer;
}
export interface ActionMeetingPhaseProps {
    avatarGroup: ReactElement;
    handleGotoNext: ReturnType<typeof useGotoNext>;
    toggleSidebar: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ActionMeeting.d.ts.map