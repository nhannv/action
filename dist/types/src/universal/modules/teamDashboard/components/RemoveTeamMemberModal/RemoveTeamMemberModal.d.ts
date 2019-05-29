import { RemoveTeamMemberModal_teamMember } from '__generated__/RemoveTeamMemberModal_teamMember.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps {
    closePortal: () => void;
    teamMember: RemoveTeamMemberModal_teamMember;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "teamMember" | "closePortal">, "teamMember" | "closePortal">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RemoveTeamMemberModal.d.ts.map