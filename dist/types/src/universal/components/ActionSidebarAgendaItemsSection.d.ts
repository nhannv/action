import { ActionSidebarAgendaItemsSection_viewer } from '__generated__/ActionSidebarAgendaItemsSection_viewer.graphql';
import React from 'react';
import { useGotoStageId } from 'universal/hooks/useMeeting';
interface Props {
    gotoStageId: ReturnType<typeof useGotoStageId>;
    viewer: ActionSidebarAgendaItemsSection_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer" | "gotoStageId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ActionSidebarAgendaItemsSection.d.ts.map