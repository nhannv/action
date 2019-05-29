import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps<{
    teamId: string;
}> {
    teamMemberId: string;
}
declare const _default: React.ComponentClass<Pick<Props, "teamMemberId">, any>;
export default _default;
//# sourceMappingURL=TeamSettingsWrapper.d.ts.map