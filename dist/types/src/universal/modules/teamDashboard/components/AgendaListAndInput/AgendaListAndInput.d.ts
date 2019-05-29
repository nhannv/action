import { AgendaListAndInput_team } from '__generated__/AgendaListAndInput_team.graphql';
import React from 'react';
import { useGotoStageId } from 'universal/hooks/useMeeting';
interface Props {
    gotoStageId: ReturnType<typeof useGotoStageId> | undefined;
    isDisabled?: boolean;
    team: AgendaListAndInput_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "team" | "gotoStageId" | "isDisabled">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=AgendaListAndInput.d.ts.map