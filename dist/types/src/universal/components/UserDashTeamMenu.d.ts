/// <reference types="react" />
import { DispatchProp } from 'react-redux';
import { MenuProps } from 'universal/hooks/useMenu';
import { ITeam } from 'universal/types/graphql';
interface Props extends DispatchProp {
    menuProps: MenuProps;
    teams: Array<Partial<ITeam>>;
    teamFilterId: string | null;
}
declare const _default: import("react-redux").ConnectedComponentClass<(props: Props) => JSX.Element, Pick<Props, "teams" | "menuProps" | "teamFilterId">>;
export default _default;
//# sourceMappingURL=UserDashTeamMenu.d.ts.map