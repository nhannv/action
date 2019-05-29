import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
import { EditableOrgName_organization } from '__generated__/EditableOrgName_organization.graphql';
interface Props extends WithAtmosphereProps, WithMutationProps {
    organization: EditableOrgName_organization;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "organization"> & React.RefAttributes<any>, "ref" | "key" | "organization">, "ref" | "key" | "organization">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=EditableOrgName.d.ts.map