import React from 'react';
import { TimelineNewFeature_viewer } from '__generated__/TimelineNewFeature_viewer.graphql';
import { WithAtmosphereProps } from '../decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from '../utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    viewer: TimelineNewFeature_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "viewer"> & React.RefAttributes<any>, "ref" | "key" | "viewer">, "ref" | "key" | "viewer">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TimelineNewFeature.d.ts.map