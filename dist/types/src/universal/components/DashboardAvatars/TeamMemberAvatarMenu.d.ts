import { TeamMemberAvatarMenu_teamMember } from '__generated__/TeamMemberAvatarMenu_teamMember.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { MenuProps } from 'universal/hooks/useMenu';
interface Props extends WithAtmosphereProps {
    isViewerLead: boolean;
    teamMember: TeamMemberAvatarMenu_teamMember;
    menuProps: MenuProps;
    handleNavigate?: () => void;
    togglePromote: () => void;
    toggleRemove: () => void;
    toggleLeave: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "teamMember" | "menuProps" | "isViewerLead" | "handleNavigate" | "togglePromote" | "toggleRemove" | "toggleLeave">, "teamMember" | "menuProps" | "isViewerLead" | "handleNavigate" | "togglePromote" | "toggleRemove" | "toggleLeave">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TeamMemberAvatarMenu.d.ts.map