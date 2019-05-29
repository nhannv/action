import React from 'react';
import { MenuProps } from 'universal/hooks/useMenu';
import { DispatchProp } from 'react-redux';
import { TeamDashTeamMemberMenu_team } from '__generated__/TeamDashTeamMemberMenu_team.graphql';
interface Props extends DispatchProp {
    menuProps: MenuProps;
    team: TeamDashTeamMemberMenu_team;
    teamMemberFilterId: string | null;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "team" | "teamMemberFilterId" | "menuProps">, "team" | "teamMemberFilterId" | "menuProps">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TeamDashTeamMemberMenu.d.ts.map