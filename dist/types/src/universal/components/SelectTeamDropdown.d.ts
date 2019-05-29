/// <reference types="react" />
import { MenuProps } from 'universal/hooks/useMenu';
import { ITeam } from 'universal/types/graphql';
interface Props {
    menuProps: MenuProps;
    teamHandleClick: (teamId: string) => () => void;
    teams: ReadonlyArray<Pick<ITeam, 'id' | 'name'>>;
}
declare const SelectTeamDropdown: (props: Props) => JSX.Element;
export default SelectTeamDropdown;
//# sourceMappingURL=SelectTeamDropdown.d.ts.map