import { OrganizationPage_organization } from '__generated__/OrganizationPage_organization.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps<{
    orgId: string;
}> {
    organization: OrganizationPage_organization;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "organization">, "organization">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=OrganizationPage.d.ts.map