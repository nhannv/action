import { ActionMeetingSidebar_viewer } from '__generated__/ActionMeetingSidebar_viewer.graphql';
import React from 'react';
import { useGotoStageId } from 'universal/hooks/useMeeting';
interface Props {
    gotoStageId: ReturnType<typeof useGotoStageId>;
    toggleSidebar: () => void;
    viewer: ActionMeetingSidebar_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer" | "toggleSidebar" | "gotoStageId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ActionMeetingSidebar.d.ts.map