import { AgendaItem_agendaItem } from '__generated__/AgendaItem_agendaItem.graphql';
import React from 'react';
import { useGotoStageId } from 'universal/hooks/useMeeting';
import { AgendaItem_newMeeting } from '__generated__/AgendaItem_newMeeting.graphql';
interface Props {
    agendaItem: AgendaItem_agendaItem;
    agendaLength: number;
    gotoStageId: ReturnType<typeof useGotoStageId> | undefined;
    idx: number;
    isDragging: boolean;
    newMeeting: AgendaItem_newMeeting | null;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "agendaItem" | "newMeeting" | "gotoStageId" | "isDragging" | "idx" | "agendaLength">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=AgendaItem.d.ts.map