import React, { Component } from 'react';
interface Props {
    dirty: boolean;
    error: string | undefined;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    teamName: string;
    onBlur(e: React.FocusEvent<HTMLInputElement>): void;
}
declare class NewTeamFormTeamName extends Component<Props> {
    render(): JSX.Element;
}
export default NewTeamFormTeamName;
//# sourceMappingURL=NewTeamFormTeamName.d.ts.map