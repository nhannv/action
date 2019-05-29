import { NewTeamOrgDropdown_organizations } from '__generated__/NewTeamOrgDropdown_organizations.graphql';
import React from 'react';
import { MenuProps } from 'universal/hooks/useMenu';
interface Props {
    menuProps: MenuProps;
    defaultActiveIdx: number;
    onChange: (orgId: string) => void;
    organizations: NewTeamOrgDropdown_organizations;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "onChange" | "organizations" | "defaultActiveIdx" | "menuProps">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=NewTeamOrgDropdown.d.ts.map