import { OrgMemberRow_organization } from '__generated__/OrgMemberRow_organization.graphql';
import { OrgMemberRow_organizationUser } from '__generated__/OrgMemberRow_organizationUser.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithMutationProps, WithAtmosphereProps {
    billingLeaderCount: number;
    organizationUser: OrgMemberRow_organizationUser;
    organization: OrgMemberRow_organization;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "organization" | "billingLeaderCount" | "organizationUser"> & React.RefAttributes<any>, "ref" | "key" | "organization" | "billingLeaderCount" | "organizationUser">, "ref" | "key" | "organization" | "billingLeaderCount" | "organizationUser">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=OrgMemberRow.d.ts.map