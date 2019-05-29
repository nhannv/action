import { BillingLeaderActionMenu_organization } from '__generated__/BillingLeaderActionMenu_organization.graphql';
import { BillingLeaderActionMenu_organizationUser } from '__generated__/BillingLeaderActionMenu_organizationUser.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { MenuProps } from 'universal/hooks/useMenu';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithMutationProps, WithAtmosphereProps {
    menuProps: MenuProps;
    isViewerLastBillingLeader: boolean;
    organizationUser: BillingLeaderActionMenu_organizationUser;
    organization: BillingLeaderActionMenu_organization;
    toggleLeave: () => void;
    toggleRemove: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "organization" | "menuProps" | "toggleRemove" | "toggleLeave" | "organizationUser" | "isViewerLastBillingLeader">, "organization" | "menuProps" | "toggleRemove" | "toggleLeave" | "organizationUser" | "isViewerLastBillingLeader"> & React.RefAttributes<any>, "ref" | "key" | "organization" | "menuProps" | "toggleRemove" | "toggleLeave" | "organizationUser" | "isViewerLastBillingLeader">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=BillingLeaderActionMenu.d.ts.map