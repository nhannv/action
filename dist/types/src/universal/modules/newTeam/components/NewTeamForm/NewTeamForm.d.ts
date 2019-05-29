import { NewTeamForm_organizations } from '__generated__/NewTeamForm_organizations.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
export declare const NewTeamFieldBlock: import("create-emotion-styled").StyledOtherComponent<{}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any>;
interface Props extends WithMutationProps, WithAtmosphereProps, RouteComponentProps<{}> {
    isNewOrganization: boolean;
    organizations: NewTeamForm_organizations;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Pick<Props, "history" | "location" | "match" | "staticContext" | "atmosphere" | "organizations" | "isNewOrganization"> & React.RefAttributes<any>, "ref" | "atmosphere" | "key" | "organizations" | "isNewOrganization">, "ref" | "key" | "organizations" | "isNewOrganization">, "ref" | "key" | "organizations" | "isNewOrganization">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=NewTeamForm.d.ts.map