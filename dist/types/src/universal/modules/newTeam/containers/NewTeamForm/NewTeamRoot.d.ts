/// <reference types="react" />
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps<{
    defaultOrgId: string;
}> {
}
declare const NewTeamRoot: ({ match: { params: { defaultOrgId } } }: Props) => JSX.Element;
export default NewTeamRoot;
//# sourceMappingURL=NewTeamRoot.d.ts.map