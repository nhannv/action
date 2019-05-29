/// <reference types="react" />
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps<{
    teamId: string;
}> {
    team: any;
}
declare const TeamArchiveRoot: ({ match, team }: Props) => JSX.Element;
export default TeamArchiveRoot;
//# sourceMappingURL=TeamArchiveRoot.d.ts.map