import { ActionSidebarPhaseListItemChildren_viewer } from '__generated__/ActionSidebarPhaseListItemChildren_viewer.graphql';
import React from 'react';
import { useGotoStageId } from 'universal/hooks/useMeeting';
import { NewMeetingPhaseTypeEnum } from 'universal/types/graphql';
interface Props {
    gotoStageId: ReturnType<typeof useGotoStageId>;
    phaseType: keyof typeof NewMeetingPhaseTypeEnum | string;
    viewer: ActionSidebarPhaseListItemChildren_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer" | "phaseType" | "gotoStageId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ActionSidebarPhaseListItemChildren.d.ts.map