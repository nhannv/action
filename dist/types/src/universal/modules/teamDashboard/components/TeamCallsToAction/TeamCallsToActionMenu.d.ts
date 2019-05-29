import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MenuProps } from 'universal/hooks/useMenu';
interface Props extends RouteComponentProps<{}> {
    menuProps: MenuProps;
    minWidth: number;
    teamId: string;
}
declare const _default: React.ComponentClass<Pick<Props, "teamId" | "menuProps" | "minWidth">, any>;
export default _default;
//# sourceMappingURL=TeamCallsToActionMenu.d.ts.map