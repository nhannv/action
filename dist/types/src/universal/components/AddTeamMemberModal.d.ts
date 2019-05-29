import { AddTeamMemberModal_team } from '__generated__/AddTeamMemberModal_team.graphql';
import React from 'react';
import { WithAtmosphereProps } from '../decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from '../utils/relay/withMutationProps';
import { AddTeamMemberModal_teamMembers } from '__generated__/AddTeamMemberModal_teamMembers.graphql';
interface Props extends WithAtmosphereProps, WithMutationProps {
    closePortal: () => void;
    teamMembers: AddTeamMemberModal_teamMembers;
    team: AddTeamMemberModal_team;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "team" | "teamMembers" | "closePortal"> & React.RefAttributes<any>, "ref" | "key" | "team" | "teamMembers" | "closePortal">, "ref" | "key" | "team" | "teamMembers" | "closePortal">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=AddTeamMemberModal.d.ts.map