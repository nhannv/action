import { AtlassianProviderRow_viewer } from '__generated__/AtlassianProviderRow_viewer.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}> {
    teamId: string;
    retry: () => void;
    viewer: AtlassianProviderRow_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "teamId" | "viewer" | "retry">, "atmosphere" | "teamId" | "viewer" | "retry"> & React.RefAttributes<any>, "ref" | "key" | "teamId" | "viewer" | "retry">, "ref" | "key" | "teamId" | "viewer" | "retry">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=AtlassianProviderRow.d.ts.map