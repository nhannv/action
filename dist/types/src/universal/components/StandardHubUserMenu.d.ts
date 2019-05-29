import { StandardHubUserMenu_viewer } from '__generated__/StandardHubUserMenu_viewer.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MenuProps } from 'universal/hooks/useMenu';
interface Props extends RouteComponentProps<{}> {
    menuProps: MenuProps;
    viewer: StandardHubUserMenu_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "viewer" | "menuProps">, "viewer" | "menuProps">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=StandardHubUserMenu.d.ts.map