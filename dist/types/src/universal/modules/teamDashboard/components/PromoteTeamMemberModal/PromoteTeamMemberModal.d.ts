import { PromoteTeamMemberModal_teamMember } from '__generated__/PromoteTeamMemberModal_teamMember.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    closePortal: () => void;
    teamMember: PromoteTeamMemberModal_teamMember;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "teamMember" | "closePortal">, "teamMember" | "closePortal"> & React.RefAttributes<any>, "ref" | "key" | "teamMember" | "closePortal">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=PromoteTeamMemberModal.d.ts.map