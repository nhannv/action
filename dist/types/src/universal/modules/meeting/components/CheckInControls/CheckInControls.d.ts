import { CheckInControls_teamMember } from '__generated__/CheckInControls_teamMember.graphql';
import React from 'react';
import { useGotoNext } from 'universal/hooks/useMeeting';
interface Props {
    handleGotoNext: ReturnType<typeof useGotoNext>;
    teamMember: CheckInControls_teamMember;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "handleGotoNext" | "teamMember">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=CheckInControls.d.ts.map