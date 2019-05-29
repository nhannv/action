import { RetroSidebarPhaseListItemChildren_viewer } from '__generated__/RetroSidebarPhaseListItemChildren_viewer.graphql';
import React from 'react';
import { useGotoStageId } from 'universal/hooks/useMeeting';
import { NewMeetingPhaseTypeEnum } from 'universal/types/graphql';
interface Props {
    gotoStageId: ReturnType<typeof useGotoStageId>;
    phaseType: keyof typeof NewMeetingPhaseTypeEnum | string;
    viewer: RetroSidebarPhaseListItemChildren_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer" | "phaseType" | "gotoStageId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RetroSidebarPhaseListItemChildren.d.ts.map