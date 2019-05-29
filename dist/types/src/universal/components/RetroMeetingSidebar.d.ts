import { RetroMeetingSidebar_viewer } from '__generated__/RetroMeetingSidebar_viewer.graphql';
import React from 'react';
import { useGotoStageId } from 'universal/hooks/useMeeting';
interface Props {
    gotoStageId: ReturnType<typeof useGotoStageId>;
    toggleSidebar: () => void;
    viewer: RetroMeetingSidebar_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer" | "toggleSidebar" | "gotoStageId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RetroMeetingSidebar.d.ts.map