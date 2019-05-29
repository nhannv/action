import { Component } from 'react';
interface Props {
    closePortal: () => void;
    successfulInvitations: Array<string>;
}
declare class AddTeamMemberModalSuccess extends Component<Props> {
    exitTimeoutId: number | undefined;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default AddTeamMemberModalSuccess;
//# sourceMappingURL=AddTeamMemberModalSuccess.d.ts.map