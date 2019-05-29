import { AgendaList_team } from '__generated__/AgendaList_team.graphql';
import React from 'react';
import { useGotoStageId } from 'universal/hooks/useMeeting';
interface Props {
    gotoStageId: ReturnType<typeof useGotoStageId> | undefined;
    team: AgendaList_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "team" | "gotoStageId">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=AgendaList.d.ts.map