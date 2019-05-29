import { LeaveTeamModal_teamMember } from '__generated__/LeaveTeamModal_teamMember.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps, RouteComponentProps<{}> {
    teamMember: LeaveTeamModal_teamMember;
    closePortal: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "teamMember" | "closePortal">, "teamMember" | "closePortal">, "teamMember" | "closePortal">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=LeaveTeamModal.d.ts.map