import { GitHubProviderRow_viewer } from '__generated__/GitHubProviderRow_viewer.graphql';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps, RouteComponentProps<{}> {
    teamId: string;
    viewer: GitHubProviderRow_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "atmosphere" | "teamId" | "viewer">, "atmosphere" | "teamId" | "viewer"> & React.RefAttributes<any>, "ref" | "key" | "teamId" | "viewer">, "ref" | "key" | "teamId" | "viewer">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=GitHubProviderRow.d.ts.map