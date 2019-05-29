import { UnpaidTeamModal_viewer } from '__generated__/UnpaidTeamModal_viewer.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps, RouteComponentProps<{}> {
    viewer: UnpaidTeamModal_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "viewer">, "viewer">, "viewer">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=UnpaidTeamModal.d.ts.map