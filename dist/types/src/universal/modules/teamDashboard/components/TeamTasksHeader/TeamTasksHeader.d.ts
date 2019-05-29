import { TeamTasksHeader_team } from '__generated__/TeamTasksHeader_team.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps<{}> {
    team: TeamTasksHeader_team;
    teamMemberFilterId: string;
    teamMemberFilterName: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "team" | "teamMemberFilterId" | "teamMemberFilterName">, "team" | "teamMemberFilterId" | "teamMemberFilterName">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TeamTasksHeader.d.ts.map