import { Organization_viewer } from '__generated__/Organization_viewer.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps<{}> {
    viewer: Organization_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "viewer">, "viewer">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=Organization.d.ts.map