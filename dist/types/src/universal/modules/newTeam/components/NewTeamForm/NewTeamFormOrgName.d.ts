import React, { Component } from 'react';
interface Props {
    dirty: boolean;
    error: string | undefined;
    isNewOrg: boolean;
    onTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    orgName: string;
    placeholder: string;
    onBlur(e: React.FocusEvent<HTMLInputElement>): void;
}
declare class NewTeamFormOrgName extends Component<Props> {
    render(): JSX.Element;
}
export default NewTeamFormOrgName;
//# sourceMappingURL=NewTeamFormOrgName.d.ts.map